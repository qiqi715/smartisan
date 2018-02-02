import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../../assets/css/cart.css';
import CartItem from './cartItem';
import CartBottom from './cartBottom';

class Cart extends Component {
    componentDidMount() {
        window.onstorage = () => {
            var isCartsNew = JSON.parse(localStorage.getItem('isCartsNew'));
            if (!isCartsNew) {
                var carts = JSON.parse(localStorage.getItem('carts'));
                this.props.dispatch({
                    type: "CARTS_UPDATE",
                    payload: carts
                });
                localStorage.setItem('isCartsNew', JSON.stringify(true));
            }
        };
    }

    viewCart() {
        if (!this.props.carts.length) {
            return (
                <div className="empty-label">
                    <h3>您的购物车中还没有商品</h3>
                    <Link to="/" className="link">现在选购</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="cart-table-title">
                        <span className="name">商品信息</span>
                        <span className="operation">操作</span>
                        <span className="subtotal">小计</span>
                        <span className="num">数量</span>
                        <span className="price">单价</span>
                    </div>
                    <div className="cart-table">
                        <div className="cart-group">
                            {
                                this.props.carts.map( cart => {
                                    return (
                                        <CartItem key={cart.id} cart={cart}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="hander-car">
                <div className="store-content">
                    <div className="cart-box">
                        <div className="title">
                            <h2>购物清单</h2>
                        </div>
                        <div className="cart-inner">
                            {this.viewCart()}
                        </div>
                        <CartBottom carts={this.props.carts}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect( state => {
    return {
        carts: state.carts
    };
})(Cart);