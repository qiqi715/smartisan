import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Order extends Component {

    /*获取时间*/
    getDate(timestamp) {
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return year + "-" + this.toTwo(month) + "-" + this.toTwo(day);
    }

    /*转成10位数*/
    toTwo(n) {
        return n < 10 ? "0" + n : n + "";
    }

    /*订单支付*/
    orderPayment(id, e) {
        e.preventDefault();
        if (typeof this.props.orderPayment === "function") {
            this.props.orderPayment(id);
        }
    }

    render() {
        var order = this.props.order;
        var rs = order.items.reduce( (pre, next) => {
            pre.total += next.price * next.quantity;
            return pre;
        }, {
            total: 0
        });

        return (
            <div className="box-inner order-cart order-list-cart clear">
                <div className="gray-sub-title cart-title">
                    <span className="date">{this.getDate(order.orderTime)}</span>
                    <span className="order-id"> 订单号：
                        <a >{order.code}</a>
                    </span>
                    <span className="order-detail">
                        <a href="javascript:;">查看详情&gt;</a>
                    </span>
                    <span className="sub-total">应付总额</span>
                    <span className="num">数量</span>
                    <span className="price">单价</span>
                </div>
                <div className="cart">
                    {
                        order.items.map( item => {
                            var title = `${item.title} (${item.subTitle}) (${item.name})`;

                            return (
                                <div key={item.itemId} className="cart-items clear">
                                    <div className="prod-info clear">
                                        <div className="items-thumb">
                                            <Link to={"/detail/" + item.itemId} target="_blank">
                                                <img src={item.cover}/>
                                            </Link>
                                        </div>
                                        <div className="items-params clear">
                                            <div className="name vh-center">
                                                <Link to={"/detail/" + item.itemId}  target="_blank" title={title}>
                                                    {title}</Link>
                                            </div>
                                            <div className="detail"></div>
                                        </div>
                                        <div className="num">{item.quantity}</div>
                                        <div className="price">¥ {(item.price / 100).toFixed(2)}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="prod-operation">
                    <div className="total">¥ {(rs.total / 100).toFixed(2)}</div>
                    <div className="status" >
                        <a className="blue-small-btn js-payment-order"
                           onClick={this.orderPayment.bind(this, order.id)}
                           style={{display: order.status === "0" ? "incline-block" : "none"}}
                        >现在付款</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Order;