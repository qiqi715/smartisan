import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    cartChecked,
    cartDelete,
    cartClear
} from '../../actions';

class CartBottom extends Component {
    /*全选*/
    checkAll(checked) {
        var cart_id = this.props.carts.filter( cart => cart.checked != checked)
            .map(cart => cart.id)
            .join(',');
        this.props.dispatch(cartChecked(cart_id, checked));
    }

    /*删除选择的商品*/
    cartDeleteAllCheck() {
        var cart_id = this.props.carts.filter( cart => cart.checked)
            .map(cart => cart.id)
            .join(',');
        this.props.dispatch(cartDelete(cart_id));
    }

    /*清空购物车*/
    cartClear() {
        this.props.dispatch(cartClear());
    }

    render() {
        if (!this.props.carts.length) {
            return "";
        }

        var rs = this.props.carts.reduce( (pre, cur) => {
            if (cur.checked) {
                pre.checkNum++;
                pre.totalQuantity += cur.quantity;
                pre.totalPrice += cur.quantity * cur.price;
            } else {
                pre.isCheckAll = false;
            }
            return pre;
        }, {
            isCheckAll: true,
            checkNum: 0,
            totalQuantity: 0,
            totalPrice: 0
        });

        return (
            <div className="cart-bottom-bg fix-bottom">
                <div className="cart-bar-operation">
                    <div>
                        <div className="choose-all js-choose-all">
                            <span className={[
                                "blue-checkbox-new",
                                rs.isCheckAll ? "checkbox-on" : ""
                                ].join(" ")}
                                  onClick={this.checkAll.bind(this, !rs.isCheckAll)}
                            ></span>
                            全选
                        </div>
                        <div className="delete-choose-goods"
                             onClick={this.cartDeleteAllCheck.bind(this)}
                        >删除选中的商品</div>
                        <div className="delete-choose-goods"
                             onClick={this.cartClear.bind(this)}
                        >清空购物车</div>
                    </div>
                </div>
                <div className="shipping">
                    <div className="shipping-box">
                        <div className="shipping-total shipping-num">
                            <h4 className="">
                                已选择 <i>{rs.checkNum}</i> 件商品
                            </h4>
                            <h5>
                                共计 <i >{rs.totalQuantity}</i> 件商品
                            </h5>
                        </div>
                        <div className="shipping-total shipping-price">
                            <h4 className="">
                                应付总额：<span>￥</span>
                                <i >{(rs.totalPrice / 100).toFixed(2)}</i>
                            </h4>
                            <h5 className="shipping-tips">
                                应付总额不含运费
                            </h5>
                        </div>
                    </div>
                        <span className={[
                            "jianguo-blue-main-btn big-main-btn js-checkout",
                            rs.checkNum ? "disabled-btn" : ""
                        ]}><a>现在结算</a></span>
                </div>
            </div>
        )
    }
}

export default connect()(CartBottom);
