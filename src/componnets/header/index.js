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
        {
            name: "在线商城",
            url: "/"
        },
        {
            name: "坚果 Pro",
            url: "/"
        },
        {
            name: "Smartisan M1 / M1L",
            url: "/"
        },
        {
            name: "Smartisan OS",
            url: "/"
        },
        {
            name: "欢喜云",
            url: "/"
        },
        {
            name: "应用下载",
            url: "/"
        },
        {
            name: "官方论坛",
            url: "/"
        }
    ],
    navSub: [
        {
            name: "首页",
            url: "/"
        },
        {
            name: "手机",
            url: "/"
        },
        {
            name: "“足迹系列”手感膜",
            url: "/"
        },
        {
            name: "官方配件",
            url: "/"
        },
        {
            name: "周边产品",
            url: "/"
        },
        {
            name: "第三方配件",
            url: "/"
        },
        {
            name: "全部商品",
            url: "/"
        },
        {
            name: "服务",
            url: "/"
        }
    ]
};

export default connect( state => {
    return {
        carts: state.carts
    }
})(Header);