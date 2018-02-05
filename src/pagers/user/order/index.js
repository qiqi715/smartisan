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
            var tip = res.code ? res.data : "支付成功";
            this.props.dispatch(promptUpdate({
                tip,
                show: true
            }))
        });
    }

    render() {
        var orders = this.props.orders.filter( order => {
           switch (this.state.stateIndex) {
               case 0:
                   break;
               case 1:
                   if (order.status != 0) {
                        return false;
                   }
                   break;
               case 2:
                   if (order.status != 1) {
                       return false;
                   }
                   break;
               case 3:
                   break;
           }

            var date = new Date(order.orderTime);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            switch (this.state.timeIndex) {
                case 0:
                    var isTrue = year === this.props.year
                        && month <= this.props.month
                        && month >= this.props.month - 2;

                    if (this.props.month <= 2) {
                        var lastMonth = this.props.month - 2 + 12;
                        return isTrue ||
                            (year === this.props.year - 1
                            && month >= lastMonth);
                    }
                    return isTrue;
                case 1:
                    return year === this.props.year;
                case 2:
                    return year === this.props.year - 1;
                case 3:
                    return year === this.props.year - 2;
            }
        });

        orders.sort( (a, b) => {
            return  b.orderTime - a.orderTime;
        });

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
                            orders.map( order => {
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

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
UserOrder.defaultProps ={
    year,
    month,
    stateList: [
        "全部状态",
        "未完成",
        "已完成",
        "已关闭"
    ],
    timeList: [
        "最近三个月",
        "今年内",
        (year - 1) + "年",
        (year - 2) + "年"
    ]
}

export default connect(state => {
    return {
        orders: state.orders
    }
})(UserOrder);