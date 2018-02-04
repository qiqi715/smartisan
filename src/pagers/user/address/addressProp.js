import React, {Component} from 'react';
import {parse} from 'qs';
import {
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';

import '../../../assets/css/address-pop.css';
import {
    addressUpdate,
    addressAdd,
    addressEdit,
    addressSetDefault,
    promptUpdate
} from '../../../actions';


class AddressProp extends Component {

    constructor(props) {
        super(props);

        var queryString = parse(this.props.location.search.substring(1));
        var id = queryString.id;
        this.state = {
            id,
            addr: {
                areaCode: "",
                city: "",
                district: "",
                province: "",
                street: "",
                phone: "",
                telephone: "",
                userName: "",
                isDefault: false
            },
            isSubmit: false
        }
    }

    componentWillMount() {
        if (this.state.id) {
            if (!this.props.address.length) {
                this.props.dispatch(addressUpdate()).then( res => {
                    if (!res.code) {
                        this.initAddr(res.data);
                    }
                });
            } else {
                this.initAddr(this.props.address);
            }
        }
    }

    /*初始化addr*/
    initAddr(address) {
        var addr = address.find( addr => addr.id == this.state.id);
        this.setState({
            ...this.state,
            addr
        });
    }

    /*input改变*/
    change(attrname, e) {
        this.setAddrValue(attrname, e.target.value.trim());
    }

    /*更改地址的某个值*/
    setAddrValue(attrname, value) {
        this.setState({
            ...this.state,
            addr: {
                ...this.state.addr,
                [attrname]: value
            }
        });
    }

    /*判断是否可以提交*/
    isSubmit() {
        var addr = this.state.addr;
        var rs = !!addr.userName
            && !!addr.telephone
            /*&& addr.province
            && addr.city
            && addr.district*/
            && !!addr.street;
        return rs;
    }

    /*提交数据*/
    submit(e) {
        if (this.state.isSubmit) {
            return;
        }

        /*新增/更新*/
        if (this.state.addr.id) {
            this.props.dispatch(addressEdit(this.state.addr)).then( res => {
                this.setDefault(res);
            });

        } else {
            this.props.dispatch(addressAdd(this.state.addr)).then( res => {
                this.setDefault(res);
            });
        }
        this.props.history.push('/user/address');
        e.preventDefault();
    }

    /*设为默认*/
    setDefault(res) {
        if (!res.code) {
            if (this.state.addr.isDefault) {
                this.props.dispatch(addressSetDefault(res.data.id));
            }
        } else {
            this.props.dispatch(promptUpdate({
                tip: res.data,
                show: true
            }));
        }
    }

    render() {
        return (
            <div id="pop">
                <div className="module-dialog-layer" style={{display: "block"}}></div>
                <div className="module-dialog clear module-dialog-address module-dialog-show" >
                    <div className="dialog-panel"  >
                        <div className="topbar">
                            <div className="dialog-tit clear">
                                <h4 className="js-dialog-title">管理收货地址</h4>
                            </div>
                            <Link to="/user/address" className="dialog-close" >x</Link>
                        </div>
                        <div className="dialog-con js-dialog-container">
                            <div className="animate-layer">
                                <div className="dialog-inner js-address-add">
                                    <div className="save-address-box">

                                        <div className="address-form">
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i style={{display: this.state.addr.userName ? "none" : "block"}}>收货人姓名</i>
                                                    <input type="text" className="js-verify"
                                                        value={this.state.addr.userName}
                                                        onChange={this.change.bind(this, "userName")}
                                                    />
                                                    <div className="verify-error"></div>
                                                </div>
                                            </div>
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i style={{display: this.state.addr.telephone ? "none" : "block"}}>手机号</i>
                                                    <input type="text" className="js-verify"
                                                       value={this.state.addr.telephone}
                                                       onChange={this.change.bind(this, "telephone")}
                                                    />
                                                    <div className="verify-error"></div>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 area-code-w fn-left form-valid-item">
                                                    <i style={{display: this.state.addr.areaCode ? "none" : "block"}}>区号（可选）</i>
                                                    <input type="text" className="js-verify js-address-area-code"
                                                       value={this.state.addr.areaCode}
                                                       onChange={this.change.bind(this, "areaCode")}
                                                    />
                                                    <div className="verify-error"></div>
                                                </div>
                                                <div className="form-item-v3 telephone-w fn-right form-valid-item">
                                                    <i style={{display: this.state.addr.phone ? "none" : "block"}}>固定电话（可选）</i>
                                                    <input type="text" className="js-verify js-address-telephone"
                                                       value={this.state.addr.phone}
                                                       onChange={this.change.bind(this, "phone")}
                                                    />
                                                    <div className="verify-error"></div>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 select-item province-wrapper">
                                                    <select name="province_code" className="province select-province js-form-province js-verify"
                                                            value={this.state.province}
                                                            onChange={this.change.bind(this, "province")}
                                                    >
                                                        <option value="">请选择省份</option>
                                                        <option value="北京市">北京市</option>
                                                        <option value="广东省">广东省</option>
                                                        <option value="上海市">上海市</option>
                                                        <option value="江苏省">江苏省</option>
                                                        <option value="浙江省">浙江省</option>
                                                        <option value="山东省">山东省</option>
                                                        <option value="河南省">河南省</option>
                                                        <option value="四川省">四川省</option>
                                                        <option value="河北省">河北省</option>
                                                        <option value="湖北省">湖北省</option>
                                                        <option value="安徽省">安徽省</option>
                                                        <option value="福建省">福建省</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                                    <select className="city select-city js-form-city js-verify">
                                                        <option defaultValue="0">请选择城市</option>
                                                    </select>
                                                </div>
                                                <div className="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                                    <select className="city select-city js-form-city js-verify"
                                                    >
                                                        <option defaultValue="0">请选择区县</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i style={{display: this.state.addr.street ? "none" : "block"}}>详细地址，如街道名称，楼层，门牌号码等</i>
                                                    <input type="text" className="js-verify"
                                                       value={this.state.addr.street}
                                                       onChange={this.change.bind(this, "street")}
                                                    />
                                                    <div className="verify-error"></div>
                                                </div>
                                            </div>
                                            <div className="module-form-row fn-clear">
                                                <span className={[
                                                    "blue-checkbox",
                                                     this.state.addr.isDefault ? "blue-checkbox-on" : ""].join(" ")}
                                                      onClick={this.setAddrValue.bind(this, "isDefault", !this.state.addr.isDefault)}
                                                ></span>设为默认
                                            </div>
                                            <div className={[
                                                "dialog-blue-btn big-main-btn js-verify-address",
                                                this.isSubmit() ? "" : "disabled-btn"].join(" ")}
                                            >
                                                <a onClick={this.submit.bind(this)}>保存</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        address: state.address
    }
})(AddressProp);