import React, {Component} from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import {connect} from 'react-redux';

import '../../../assets/css/address.css';
import AddressProp from './addressProp';
import {
    addressUpdate,
    addressDelete
} from '../../../actions';

class UserAddress extends Component {
    componentDidMount() {
        if (!this.props.address.length) {
            this.props.dispatch(addressUpdate());
        }
    }

    /*修改地址*/
    addrEdit(id) {
        this.props.history.push('/user/address/prop/?id=' + id);
    }

    /*删除地址*/
    addrDel(id) {
        this.props.dispatch(addressDelete(id));
    }

    render() {
        return (
            <div className="account-address">
                <div className="gray-box clear">
                    <div className="title pre-title">
                        <h2 className="fn-left">收货信息</h2>
                        <span className="gray-blue-btn js-add-address">
                            <Link to="/user/address/prop" className="add">添加新地址</Link>
                        </span>
                    </div>
                    <div className="box-inner clear">
                        {
                            this.props.address.map( addr => {
                                return (
                                    <div key={addr.id} className="address-list-item default-item">
                                        <div className="name fn-left">
                                            <div className="name-cell">{addr.userName}</div>
                                        </div>
                                        <div className="detail fn-left">
                                            <div className="detail-cell">{
                                                [
                                                    addr.province,
                                                    addr.city,
                                                    addr.district,
                                                    addr.street
                                                ].join(" ")
                                            }</div>
                                        </div>
                                        <div className="operation fn-right">
                                            <div className="operation-cell">
                                                <span className="gray-edit-btn js-edit-address"
                                                      onClick={this.addrEdit.bind(this, addr.id)}
                                                >修改</span>
                                                <span className="red-del-btn js-del-address"
                                                      onClick={this.addrDel.bind(this, addr.id)}><a>删除</a></span>
                                            </div>
                                        </div>
                                        <div className="default fn-right">  {addr.isDefault ? "（默认地址）" : " "}  </div>
                                        <div className="telephone fn-right">{addr.telephone}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Route path="/user/address/prop" component={AddressProp} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        user: state.user,
        address: state.address
    }
})(UserAddress);