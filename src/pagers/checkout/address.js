import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addressUpdate} from '../../actions';

class Address extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: -1
        }
    }

    componentDidMount() {
        if (!this.props.address.length) {
            this.props.dispatch(addressUpdate()).then( res => {
                if (!res.code) {
                    var defaultAddr = res.data.find( addr => addr.isDefault);
                    if (defaultAddr) {
                        this.setState({
                            id: defaultAddr.id
                        });
                    }
                }
            });
        }
    }

    /*选择某个地址*/
    selectAddr(id) {
        this.setState({
            ...this.state,
            id
        })
    }

    render() {
        return (
            <div className="js-checkout-address-box">
                <div className="gray-box clear">
                    <div className="title columns-title pre-title">
                        <h2>收货信息</h2>
                    </div>
                    <div className="box-inner js-checkout-address-panel ">
                        <div className="address-common-table js-multiple-address-panel">
                            <ul className="address-item-list clear js-address-item-list">
                                {
                                    this.props.address.map(addr => {
                                        return (
                                            <li key={addr.id} className={["js-choose-address",
                                                this.state.id == addr.id ? "selected-address-item" : ""].join(" ")}
                                                onClick={this.selectAddr.bind(this, addr.id)}
                                            >
                                                <div className="address-item">
                                                    <div className="name-section">  {addr.username}  </div>
                                                    <div className="mobile-section">{addr.telephone}</div>
                                                    <div className="detail-section"> {[addr.province, addr.city, addr.district].join(" ")} <br/>
                                                        {addr.street} </div>
                                                </div>
                                                <div className="operation-section">
                                                    <span className="update-btn js-edit-address">修改</span>
                                                    <span className="delete-btn js-delete-address">删除</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                <li className="add-address-item js-add-address">
                                    <p>使用新地址</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        address: state.address
    }
})(Address);