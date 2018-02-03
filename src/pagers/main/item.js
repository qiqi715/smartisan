import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    cartAdd,
    updatePrompt
} from '../../actions';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }
    }

    /*鼠标移动改变颜色*/
    mouseOver(index) {
        this.setState({
            index
        })
    }

    /*加入购物车*/
    cartAdd(itemId, quantity) {
        this.props.dispatch(cartAdd(itemId, quantity))
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
        var currentChild = this.props.data.children[this.state.index];

        return (
            <div className="item">
                <div>
                    <div className="item-img">
                        <img alt={this.props.data.subTitle} src={currentChild.cover} style={{opacity: 1}}/>
                    </div>
                    <h6>{this.props.data.title}</h6>
                    <h3 >{this.props.data.subTitle}</h3>
                    <div className="params-colors">
                        <ul className="colors-list">
                            {
                                this.props.data.children.map( (child, index) => {
                                    return (
                                        <li key={child.id}
                                            onMouseOver={this.mouseOver.bind(this, index)}
                                        >
                                            <a href="javascript:;" className={index == this.state.index? "active" : ""} >
                                                <img src={child.color} />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="item-btns clearfix">
                        <span className="item-gray-btn">
                            <Link to={"/detail/" + currentChild.id} >查看详情</Link>
                        </span>
                        <span className="item-blue-btn"
                              onClick={this.cartAdd.bind(this, currentChild.id, 1)}
                        >加入购物车 </span>
                    </div>
                    <div className="item-price clearfix">
                        <i>¥</i><span>{(currentChild.price / 100).toFixed(2)}</span>
                    </div>
                    <div className="discount-icon">false</div>
                    <div className="item-cover">
                        <a href="javascript:;" target="_blank"></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Item);