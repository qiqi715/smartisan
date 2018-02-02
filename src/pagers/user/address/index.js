import React, {Component} from 'react';

import '../../../assets/css/address.css';

class UserAddress extends Component {
    render() {
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
                                    <li className="current"><a href="javascript:;">我的订单</a></li>
                                    <li className=""><a href="javascript:;">收货地址</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="account-content">
                        <div className="account-address">
                            <div className="gray-box clear">
                                <div className="title pre-title">
                                    <h2 className="fn-left">收货信息</h2>
                                    <span className="gray-blue-btn js-add-address"><a className="add">添加新地址</a></span>
                                </div>
                                <div className="box-inner clear">
                                    <div className="address-list-item default-item" data-id="765532">
                                        <div className="name fn-left">
                                            <div className="name-cell">王海龙</div>
                                        </div>
                                        <div className="detail fn-left">
                                            <div className="detail-cell">北京市 市辖区 海淀区 上地十街辉煌国际大厦西6号楼319室</div>
                                        </div>
                                        <div className="operation fn-right">
                                            <div className="operation-cell">
                                                <a className="gray-edit-btn js-edit-address">修改</a>
                                                <span className="red-del-btn js-del-address"> <a>删除</a><em>删除</em> </span>
                                            </div>
                                        </div>
                                        <div className="default fn-right">  （默认地址）  </div>
                                        <div className="telephone fn-right">13810719453</div>
                                    </div>
                                    <div className="address-form clear" style={{display: "none"}}>
                                        <div className="module-form-row">
                                            <div className="form-item-v3">
                                                <i>收货人姓名</i>
                                                <input type="text" className="js-verify"/>
                                                    <div className="verify-error"></div>
                                            </div>
                                        </div>
                                        <div className="module-form-row">
                                            <div className="form-item-v3">
                                                <i>手机号</i>
                                                <input type="text" className="js-verify"/>
                                                    <div className="verify-error"></div>
                                            </div>
                                        </div>
                                        <div className="module-form-row clear">
                                            <div className="form-item-v3 area-code-w fn-left form-valid-item">
                                                <i>区号（可选）</i>
                                                <input type="text" className="js-verify js-address-area-code"/>
                                                    <div className="verify-error"></div>
                                            </div>
                                            <div className="form-item-v3 telephone-w fn-right form-valid-item">
                                                <i>固定电话（可选）</i>
                                                <input type="text" className="js-verify js-address-telephone"/>
                                                    <div className="verify-error"></div>
                                            </div>
                                        </div>
                                        <div className="module-form-row clear">
                                            <div className="form-item-v3 select-item province-wrapper">
                                                <select name="province_code" className="province select-province js-form-province js-verify">
                                                    <option value="0">请选择省份</option>  <option value="110000">北京市</option>
                                                    <option value="440000">广东省</option>  <option value="310000">上海市</option>
                                                    <option value="320000">江苏省</option>  <option value="330000">浙江省</option>
                                                    <option value="370000">山东省</option>  <option value="410000">河南省</option>
                                                    <option value="510000">四川省</option>  <option value="130000">河北省</option>
                                                    <option value="420000">湖北省</option>  <option value="340000">安徽省</option>
                                                    <option value="350000">福建省</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="module-form-row clear">
                                            <div className="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                                <select className="city select-city js-form-city js-verify">
                                                    <option value="0">请选择城市</option>
                                                </select>
                                            </div>
                                            <div className="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                                <select className="city select-city js-form-city js-verify">
                                                    <option value="0">请选择区县</option>
                                                    <option value="0">请选择区县</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="module-form-row">
                                            <div className="form-item-v3">
                                                <i>详细地址，如街道名称，楼层，门牌号码等</i>
                                                <input type="text" className="js-verify"/>
                                                    <div className="verify-error"></div>
                                            </div>
                                        </div>
                                        <div className="module-form-row clear">
                                            <input type="checkbox" name="default" className="hide" value="1" data-id="1"/>
                                                <span className="blue-checkbox" data-checkbox-name="default"></span>设为默认
                                        </div>
                                        <div className="dialog-blue-btn big-main-btn disabled-btn js-verify-address"><a>保存</a></div>
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

export default UserAddress;