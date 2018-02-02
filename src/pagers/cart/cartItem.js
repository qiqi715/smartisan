import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    cartChecked,
    cartAdd,
    cartReduce,
    cartDelete
} from '../../actions';

class CartItem extends Component {

    /*选中某件商品*/
    cartChecked(cart_id, checked) {
        this.props.dispatch(cartChecked(cart_id, checked));
    }

    /*添加商品到购物车*/
    cartAdd(cart, num) {
        if (cart.quantity + num < cart.stock) {
            this.props.dispatch(cartAdd(cart.itemId, num));
        }
    }

    /*减持购物车中的商品数量*/
    cartReduce(cart, num) {
        console.log(cart.quantity ,  num);

        if (cart.quantity >= 1 + num) {
            this.props.dispatch(cartReduce(cart.itemId, cart.id, num));
        }
    }

    /*购物车数量改变*/
    cartChange(cart, e) {
        var value =  Number(e.target.value);
        if (!isNaN(value) &&  value >= 1) {
            var rs = value - cart.quantity;
            console.log(2, value, cart.quantity, rs);

            if (rs > 0) {
                this.cartAdd(cart, Math.abs(rs));
            } else {
                this.cartReduce(cart, Math.abs(rs));
            }
        }
    }

    /*删除某件商品*/
    cartDelete(cart_id, e) {
        e.preventDefault();
        this.props.dispatch(cartDelete(cart_id));
    }

    render() {
        var cart = this.props.cart;
        return (
            <div key={cart.id} className="cart-top-items">
                <div className="cart-items">
                    <div className="items-choose">
                        <span className={[
                            "blue-checkbox-new",
                            cart.checked ? "checkbox-on" : ""].join(" ")}
                              onClick={this.cartChecked.bind(this, cart.id, !cart.checked)}
                        ></span>
                    </div>
                    <div className="items-thumb">
                        <img src={cart.cover}/>
                        <Link to={"/detail/" + cart.itemId} target="_blank"></Link>
                    </div>
                    <div className="name hide-row" >
                        <div className="name-table">
                            <Link to={"/detail/" + cart.itemId} target="_blank">{cart.title}</Link>
                            <ul className="attribute">
                                <li>{cart.name}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="operation">
                        <a className="items-delete-btn"
                           onClick={this.cartDelete.bind(this, cart.id)}
                        ></a>
                    </div>
                    <div className="subtotal">¥ {(cart.price * cart.quantity / 100).toFixed(2)}</div>
                    <div className="item-cols-num">
                        <div className="select js-select-quantity">
                            <span className={[
                                "down",
                                cart.quantity == 1 ? "down-disabled" : ""
                                ].join(" ")}
                                  onClick={this.cartReduce.bind(this, cart, 1)}
                            >-</span>
                            <span className="num">
                                <input type="text" value={cart.quantity}
                                   onChange={this.cartChange.bind(this, cart)} />
                            </span>
                            <span className={[
                                "up",
                                cart.quantity > cart.stock ? "down-disabled" : ""
                                ].join(" ")}
                                  onClick={this.cartAdd.bind(this, cart, 1)}
                            >+</span>
                        </div>
                    </div>
                    <div className="price">¥ {(cart.price / 100).toFixed(2)}</div>
                </div>
            </div>
        );
    }
}

export default connect()(CartItem);
