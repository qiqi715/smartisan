import React, {Component} from 'react';
import {
    Link,
    NavLink
} from 'react-router-dom';
import {connect} from 'react-redux';

import {cartUpdate} from '../../actions';

class Cart extends Component {

    /*订单提交*/
    orderSubmit(isActive, e) {
        e.preventDefault();
        if (isActive
            && typeof this.props.orderSubmit === "function") {
            this.props.orderSubmit();
        }
    }

    render() {
        var ckCarts = [];
        ckCarts = this.props.carts.filter( cart => cart.checked);
        var rs = ckCarts.reduce((pre, cur) => {
            pre.total += cur.price * cur.quantity;
            return pre;
        }, {
            total: 0
        });
        var isActive = ckCarts.length && this.props.addrLength;

        return (
            <div className="gray-box">
                <div className="title pre-title">
                    <h2>购物清单</h2>
                </div>
                <div className="box-inner ui-goods-cart">
                    <div className="gray-sub-title cart-table-title">
                        <span className="name">商品名称</span>
                        <span className="subtotal">小计</span>
                        <span className="num">数量</span>
                        <span className="price">单价</span>
                    </div>
                    <div className="cart-table">
                        <div className="cart-group js-cart-group">
                            {
                                ckCarts.map(cart => {
                                    return (
                                        <div key={cart.id} className="cart-items">
                                            <div className="items-thumb">
                                                <Link to={"/detail/" + cart.itemId} target="_blank">
                                                    <img src={cart.cover}/>
                                                </Link>
                                            </div>
                                            <div className="name hide-row">
                                                <div className="name-cell">
                                                    <Link to={"/detail/" + cart.itemId} title={cart.title} target="_blank">
                                                        {cart.title}</Link>
                                                </div>
                                            </div>
                                            <div className="subtotal">
                                                <div className="subtotal-cell">  ¥ {(cart.price * cart.quantity / 100).toFixed(2)}  </div>
                                            </div>
                                            <div className="goods-num">{cart.quantity} </div>
                                            <div className="price">¥ {(cart.price / 100).toFixed(2)} </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className="box-inner">
                    <div className="order-discount-line">
                        <p> 商品总计： <span>¥ {(rs.total / 100).toFixed(2)}</span> </p>
                        <p> 运费： <span>+ ¥ 0.00</span> </p>
                        <p className="discount-line js-discount-cash"> <em>现金券</em>： <span> - 0 </span> </p>
                    </div>
                </div>
                <div className="box-inner">
                    <div className="last-payment clear">
                        <span className="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout">
                            <a onClick={this.orderSubmit.bind(this, isActive)}>提交订单</a>
                        </span>
                        <span className="prices fn-right">应付金额：
                            <em>¥ {(rs.total / 100).toFixed(2)}</em>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        carts: state.carts
    }
})(Cart);