import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userLoginOut} from '../../actions';

class User extends Component {

    /*退出*/
    toLoginOut(e) {
        e.preventDefault();
        this.props.dispatch(userLoginOut());
    }

    /*根据用户状态显示不同的界面*/
    viewUser() {
        if (this.props.user.uid) {
            return (
                <div className="nav-user-list">
                    <dl className="nav-user-avatar">
                        <dd><span className="ng-scope"></span></dd>
                        <dt className="ng-binding">+86 138****9453</dt>
                    </dl>
                    <ul>
                        <li className="order">
                            <Link to="/user/order">我的订单</Link>
                        </li>
                        <li className="support"><a href="javascript:;">售后服务</a></li>
                        <li className="coupon"><a href="javascript:;">我的优惠</a></li>
                        <li className="information"><a href="javascript:;">账户资料</a></li>
                        <li className="address">
                            <Link to="/user/address">收货地址</Link>
                        </li>
                        <li className="logout">
                            <Link to="/"
                               onClick={this.toLoginOut.bind(this)}>退出</Link>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="nav-user-list">
                    <dl className="nav-user-avatar">
                        <dd><span className="ng-scope"></span></dd>
                        <dt className="ng-binding"></dt>
                    </dl>
                    <ul>
                        <li className="order"><a href="javascript:;">注册</a></li>
                        <li className="support">
                            <Link to="/login">登录</Link>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="nav-user-wrapper">
                { this.viewUser() }
            </div>
        );
    }
}

export default connect( state => {
    return {
        user: state.user
    }
})(User);