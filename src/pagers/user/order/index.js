import React, {Component} from 'react';

import '../../../assets/css/order.css';

class UserOrder extends Component {
    render() {
        return (
            <div className="account-order">
                <div className="gray-box">
                    <div className="title columns-title pre-title">
                        <h2>我的订单</h2>
                        <div className="gray-btn-menu sort-status-menu">
                            <span className="label"><i className="arrow"></i> 全部状态 </span>
                            <ul className="menu-list">
                                <li className="selected"><a href="javascript:;">全部状态</a></li>
                                <li className=""><a href="javascript:;">未完成</a></li>
                                <li className=""><a href="javascript:;">已完成</a></li>
                                <li className=""><a href="javascript:;">已关闭</a></li>
                            </ul>
                        </div>
                        <div className="gray-btn-menu sort-time-menu -gray-btn-menu-on">
                            <span className="label"><i className="arrow"></i> 最近三个月 </span>
                            <ul className="menu-list">
                                <li className="selected"><a href="javascript:;">最近三个月</a></li>
                                <li className=""><a href="javascript:;">今年内</a></li>
                                <li className=""><a href="javascript:;">2016年</a></li>
                                <li className=""><a href="javascript:;">2015年</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="js-list-inner">
                        <div className="box-inner order-cart order-list-cart clear">
                            <div className="gray-sub-title cart-title">
                                <span className="date">2017-06-19</span>
                                <span className="order-id"> 订单号： <a href="javascript:;">170619703723305</a> </span>
                                <span className="order-detail"><a href="javascript:;">查看详情&gt;</a> </span> <span className="sub-total">应付总额</span>
                                <span className="num">数量</span>
                                <span className="price">单价</span>
                            </div>
                            <div className="cart">
                                <div className="cart-items clear">
                                    <div className="prod-info clear">
                                        <div className="items-thumb">
                                            <a href="javascript:;" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/></a>
                                        </div>
                                        <div className="items-params clear">
                                            <div className="name vh-center">
                                                <a href="javascript:;" target="_blank" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                                            </div>
                                            <div className="detail"></div>
                                        </div>
                                        <div className="num">1</div>
                                        <div className="price">¥ 49.00</div>
                                    </div>
                                </div>
                                <div className="cart-items clear">
                                    <div className="prod-info clear">
                                        <div className="items-thumb">
                                            <a href="javascript:;" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/></a>
                                        </div>
                                        <div className="items-params clear">
                                            <div className="name vh-center">
                                                <a href="javascript:;" target="_blank" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                                            </div>
                                            <div className="detail"></div>
                                        </div>
                                        <div className="num">1</div>
                                        <div className="price">¥ 49.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="prod-operation">
                                <div className="total">¥ 297.00</div>
                                <div className="status"><a className="blue-small-btn js-payment-order">现在付款</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserOrder;