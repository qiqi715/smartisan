import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Address extends Component {

    /*选择某个地址*/
    addrSelect(index) {
        if (typeof this.props.addrSelect === "function") {
            this.props.addrSelect(index);
        }
    }

    /*地址新增*/
    addrAdd() {
        this.props.history.push("/checkout/addressProp");
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
                                    this.props.address.map((addr, index) => {
                                        return (
                                            <li key={addr.id} className={["js-choose-address",
                                                this.props.index == index ? "selected-address-item" : ""].join(" ")}
                                                onClick={this.addrSelect.bind(this, index)}
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
                                <li className="add-address-item js-add-address"
                                    onClick={this.addrAdd.bind(this)}
                                >
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

export default withRouter(Address);