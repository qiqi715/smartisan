import React, {Component} from 'react';
import {connect} from 'react-redux'

import '../../assets/css/header.css';
import Cart from './cart';
import User from './user';
import Nav from './nav';
import {
    cartUpdate
} from '../../actions';

class Header extends Component {
    componentDidMount() {
        if (!this.props.carts.length) {
            this.props.dispatch(cartUpdate());
        }
    }

    render() {
        return (
            <div id="header">
                <div className="nav-global">
                    <div className="container">
                        <h1 className="nav-logo">
                            <a href="javascript:;"></a>
                        </h1>
                        <ul className="nav-aside">
                            <li className="nav-user">
                                <a href="javascript:;">个人中心</a>
                                <User/>
                            </li>
                            <li className="nav-cart">
                                <a href="javascript:;">购物车</a>
                                <span className="cart-empty-num cart-num">
                                    <i>{this.props.carts.length}</i>
                                </span>
                                <Cart carts={this.props.carts}/>
                            </li>
                        </ul>
                        <Nav data={this.props.navGlobal}/>
                    </div>
                </div>
                <div className="nav-sub">
                    <div className="nav-sub-wrapper">
                        <div className="container">
                            <Nav data={this.props.navSub}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.defaultProps = {
    navGlobal: [
      "在线商城",
      "坚果 Pro",
      "Smartisan M1 / M1L",
      "Smartisan OS",
      "欢喜云",
      "应用下载",
      "官方论坛"
    ],
    navSub: [
        "首页",
        "手机",
        "“足迹系列”手感膜",
        "官方配件",
        "周边产品",
        "第三方配件",
        "全部商品",
        "服务"
    ]
};

export default connect( state => {
    return {
        carts: state.carts
    }
})(Header);