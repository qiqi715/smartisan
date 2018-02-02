import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    cartDelete
} from '../../actions';

class Cart extends Component {

    /*删除某件商品*/
    cartDelete(cart_id) {
        this.props.dispatch(cartDelete(cart_id));
    }

    viewCart() {
        if (!this.props.carts.length) {
            return (
                <div className="empty">
                    <h3>购物车为空</h3>
                    <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                </div>
            );
        } else {
            var total = this.props.carts.reduce( (pre, cur) => {
                return pre + cur.price * cur.quantity;
            }, 0)
            return (
                <div className="full">
                    <div className="nav-cart-items">
                        <ul>
                            {
                                this.props.carts.map( cart => {
                                    return (
                                        <li key={cart.id} className="clear">
                                            <div className="cart-item js-cart-item cart-item-sell">
                                                <div className="cart-item-inner">
                                                    <div className="item-thumb">
                                                        <img src={cart.cover} />
                                                    </div>
                                                    <div className="item-desc">
                                                        <div className="cart-cell">
                                                            <h4>
                                                                <Link to={"/detail/" + cart.itemId}>{cart.title}</Link>
                                                            </h4>
                                                            <p className="attrs">
                                                                <span>{cart.name}</span>
                                                            </p>
                                                            <h6>
                                                                <span className="price-icon">¥</span>
                                                                <span className="price-num">{(cart.price / 100).toFixed(2)}</span>
                                                                <span className="item-num">x {cart.quantity}</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="del-btn"
                                                         onClick={this.cartDelete.bind(this, cart.id)}
                                                    >删除</div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="nav-cart-total">
                        <p>共 <strong className="ng-binding">{this.props.carts.length}</strong> 件商品</p>
                        <h5>合计：
                            <span className="price-icon">¥</span>
                            <span className="price-num ng-binding" >{(total / 100).toFixed(2)}</span>
                        </h5>
                        <h6>
                            <Link className="nav-cart-btn"
                                to="/cart">去购物车</Link>
                        </h6>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-cart-wrapper">
                <div className="nav-cart-list">
                    {this.viewCart()}
                </div>
            </div>
        );
    }
}

export default connect()(Cart);