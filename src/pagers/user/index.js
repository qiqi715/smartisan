import React, {Component} from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import {connect} from 'react-redux';

import '../../assets/css/account.css';
import UserAddress from './address';
import UserOrder from './order';

class User extends Component {
    render() {
        if (!this.props.user.uid) {
            return "";
        }

        var pathname = this.props.location.pathname;
        return (
            <div className="content clear">
                <div className="account-wrapper">
                    <div className="account-sidebar">
                        <div className="avatar gray-box clear">
                            <div className="js-account-sidebar-info">
                                <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png"/>
                            </div>
                            <div className="box-inner">
                                <ul className="account-nav">
                                    {
                                        this.props.paths.map( (item, index) => {
                                            return (
                                                <li key={index} className={pathname === item.path ? "current" : ""}>
                                                    <Link to={item.path}>{item.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="account-content">
                        <Route path="/user/order" component={UserOrder} />
                        <Route path="/user/address" component={UserAddress} />
                    </div>
                </div>
            </div>
        );
    }
}

User.defaultProps = {
  paths: [
      {
          path: "/user/order",
          name: "我的订单"
      },
      {
          path: "/user/address",
          name: "收货地址"
      }
  ]
};

export default connect( state => {
    return {
        user: state.user
    }
})(User);