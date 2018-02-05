import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../../assets/css/order.css';
import Menu from './menu';
import Order from './order';
import {
    orderUpdate,
    orderPayment,
    promptUpdate
} from '../../../actions';

class UserOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stateIndex: 0,
            timeIndex: 0
        };
    }

    componentDidMount() {
        if (!this.props.orders.length) {
            this.props.dispatch(orderUpdate());
        }
    }

    /*状态改变*/
    stateChange(attr, value) {
        this.setState({
            ...this.state,
            [attr]: value
        });
    }

    /*订单支付*/
    orderPayment(id) {
        this.props.dispatch(orderPayment(id)).then( res => {
            if (res.code) {
                this.props.dispatch(promptUpdate({
                    tip: res.data,
                    show: true
                }))
            }
        });
    }

    render() {
        return (
            <div className="account-order">
                <div className="gray-box">
                    <div className="title columns-title pre-title">
                        <h2>我的订单</h2>
                        <Menu index={this.state.stateIndex}
                              list={this.props.stateList}
                              className="sort-status-menu"
                              menuChoose={this.stateChange.bind(this, "stateIndex")}
                        />

                        <Menu index={this.state.timeIndex}
                              list={this.props.timeList}
                              className="sort-time-menu"
                              menuChoose={this.stateChange.bind(this, "timeIndex")}
                        />
                    </div>
                    <div className="js-list-inner">
                        {
                            this.props.orders.map( order => {

                                return (
                                    <Order key={order.id} order={order}
                                           orderPayment={this.orderPayment.bind(this)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

UserOrder.defaultProps ={
    stateList: [
        "全部状态",
        "未完成",
        "已完成",
        "已关闭"
    ],
    timeList: [
        "最近三个月",
        "今年内",
        "2016年",
        "2015年"
    ]
}

export default connect(state => {
    return {
        orders: state.orders
    }
})(UserOrder);