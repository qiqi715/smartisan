import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../assets/css/payment.css';
import Detail from './detail';
import {
    orderUpdate,
    orderPayment,
    promptUpdate
} from "../../actions";

class Payment extends Component {

    componentWillMount() {
        if (!this.props.orders.length) {
            this.props.dispatch(orderUpdate());
        }
    }

    /*订单支付*/
    orderPayment(id, e) {
        e.preventDefault();
        this.props.dispatch(orderPayment(id)).then( res => {
            if (res.code) {
                this.props.dispatch(promptUpdate({
                    tip: res.data,
                    show: true
                }));
            } else {
                this.props.history.push('/user/order');
            }
        });
    }

    render() {
        var id = this.props.match.params.id;
        var order = this.props.orders.find( order => order.id == id);
        if (!order) {
            return "";
        } else if(order.status != 0) {
            this.props.history.push('/user/order');
        }
        var rs = order.items.reduce( (pre, next) => {
            pre.total += next.price * next.quantity;
            return pre;
        }, {
            total: 0
        }) ;

        return (
            <div className="content page-order-payment">
                <div className="gray-box clear">
                    <div className="title">
                        <h2>支付订单</h2>
                    </div>
                    <div className="box-inner order-info">
                        <h3>提交订单成功</h3>
                        <p className="payment-detail">请在 <span>24 小时内</span>完成支付，超时订单将自动取消。</p>
                        <p className="payment-detail">我们将在您完成支付后的 72 小时内发货</p>
                    </div>
                    <div className="box-inner payment-checkout-panel clear">
	    	            <span className="jianguo-blue-main-btn big-main-btn js-payment-order">
	    	                <a onClick={this.orderPayment.bind(this, order.id)}>现在支付</a>
	    	            </span>
                        <span className="prices"> 应付金额：
                            <em><span>¥ </span>{(rs.total / 100).toFixed(2)}</em>
                        </span>
                    </div>
                </div>
                <Detail order={order} rs={rs}/>
            </div>
        );
    }
}

export default connect(state => {
    return {
        orders: state.orders
    }
})(Payment);