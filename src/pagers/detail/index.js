import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import '../../assets/css/item.css';
import {fetchItems} from '../../actions/index';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            quantity: 0
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            index: 0,
            quantity: 1
        });
    }

    componentWillMount() {
        if (!this.props.items.length) {
           this.props.dispatch(fetchItems());
        }
    }

    mouseOver(index) {
        this.setState({
            ...this.state,
            index
        })
    }

    quantityDown() {
        var quantity = this.state.quantity - 1;
        if (quantity < 1) {
            quantity = 1;
        }
        this.setState({
            ...this.state,
            quantity
        })
    }

    quantityUp() {
        var quantity = this.state.quantity + 1;
        if (quantity > 10) {
            quantity = 10;
        }
        this.setState({
            ...this.state,
            quantity
        });
    }

    render() {
        var id = this.props.match.params.id;
        var items = this.props.items;
        var current = items.find( item =>item.id == id);
        var parent = items.find( item => {
            if (item.id == current.pid) {
                item.children = items.filter( child => child.pid == item.id)
                return item;
            }
        });

        return (
            <div className="store-content item">
                <div className="item-box">
                    <div className="gallery-wrapper">
                        <div className="gallery">
                            <div className="thumbnail">
                                <ul>
                                    {   current
                                        ?   current.album.map( (item, index) => {
                                                return (
                                                    <li key={index}
                                                        className={index == this.state.index ? "on" : ""}
                                                        onMouseOver={this.mouseOver.bind(this, index)}
                                                    >
                                                        <img src={item}/>
                                                    </li>
                                                )
                                            })
                                        : ''
                                    }
                                </ul>
                            </div>
                            <div className="thumb">
                                <ul>
                                    {   current
                                        ?   current.album.map( (item, index) => {
                                                return (
                                                    <li key={index}
                                                        className={index == this.state.index ? "on" : ""}>
                                                        <img src={item}/>
                                                    </li>
                                                )
                                            })
                                        : ''
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="sku-custom-title">
                            <div className="params-price">
                                <span><em>¥</em><i>{current ? (current.price / 100).toFixed(2) : ''}</i></span>
                            </div>
                            <div className="params-info">
                                <h4>{parent ? parent.title : ''}</h4>
                                <h6>{parent ? parent.subTitle : ''}</h6>
                            </div>
                        </div>
                        <div className="sku-dynamic-params-panel">
                            <div className="sku-dynamic-params clear">
                                <span className="params-name">颜色</span>
                                <ul className="params-colors">
                                    {   parent
                                        ?   parent.children.map( (child, index) => {
                                                return (
                                                    <li key={child.id}
                                                        className={id == child.id ? "cur" : ""}
                                                    >
                                                        <Link to={"/detail/" + child.id} >
                                                            <i>
                                                                <img src={child.color} />
                                                            </i>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        : ''
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
                            <span className="blue-title-btn js-add-cart"><a>加入购物车</a></span>
                            <span className="gray-title-btn"><a>现在购买</a></span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        );
    }
}

export default connect( state => {
    return {
        items: state.items
    };
})(Detail);
