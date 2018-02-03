import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {
    cartAdd,
    updatePrompt
} from '../../actions';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            quantity: 1
        });
    }

    /*数量递减*/
    quantityDown() {
        var quantity = this.state.quantity - 1;
        if (quantity >= 1) {
            this.setState({
                quantity
            })
        }
    }

    /*数量新增*/
    quantityUp() {
        var quantity = this.state.quantity + 1;
        if (quantity <= this.props.current.stock) {
            this.setState({
                quantity
            });
        }
    }

    /*加入购物车*/
    cartAdd() {
        this.props.dispatch(cartAdd(this.props.id, this.state.quantity))
            .then( res => {
                if (res.code) {
                    this.props.dispatch(updatePrompt({
                        tip: res.data,
                        show: true
                    }));
                }
            });
    }

    render() {
        if (!this.props.current) {
            return "";
        }
        return (
            <div className="banner">
                <div className="sku-custom-title">
                    <div className="params-price">
                        <span>
                            <em>¥</em>
                            <i>{(this.props.current.price / 100).toFixed(2)}</i>
                        </span>
                    </div>
                    <div className="params-info">
                        <h4>{this.props.parent.title}</h4>
                        <h6>{this.props.parent.subTitle}</h6>
                    </div>
                </div>
                <div className="sku-dynamic-params-panel">
                    <div className="sku-dynamic-params clear">
                        <span className="params-name">颜色</span>
                        <ul className="params-colors">
                            {
                                this.props.parent.children.map( child => {
                                    return (
                                        <li key={child.id}
                                            className={this.props.id == child.id ? "cur" : ""}
                                        >
                                            <Link to={"/detail/" + child.id} >
                                                <i><img src={child.color} /></i>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="sku-dynamic-params clear">
                        <div className="params-name">数量</div>
                        <div className="params-detail clear">
                            <div className="item-num js-select-quantity">
                                <span className={[
                                    "down",
                                     this.state.quantity === 1 ? "down-disabled" : ''].join(" ")}
                                      onClick={this.quantityDown.bind(this)}
                                >-</span>
                                <span className="num">{this.state.quantity}</span>
                                <span className={[
                                    "up",
                                    this.state.quantity === 10 ? "up-disabled" : ''].join(" ")}
                                      onClick={this.quantityUp.bind(this)}
                                >+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sku-status">
                    <div className="cart-operation-wrapper clearfix">
                        <span className="blue-title-btn js-add-cart"
                              onClick={this.cartAdd.bind(this)}
                        ><a>加入购物车</a></span>
                        <span className="gray-title-btn"><a>现在购买</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Banner);
