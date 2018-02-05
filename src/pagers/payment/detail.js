import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Detail extends Component {

    render() {
        var address = this.props.order.address;

        return (
            <div >
                <div className="confirm-detail">
                    <div className="info-title">订单编号</div>
                    <p className="info-detail">{this.props.order.code}</p>
                </div>
                <div className="confirm-detail">
                    <div className="info-title">收货信息</div>
                    <p className="info-detail">姓名：{address.userName}</p>
                    <p className="info-detail">联系电话：{address.telephone}</p>
                    <p className="info-detail">详细地址：{[
                        address.province,
                        address.city,
                        address.district,
                        address.street
                    ].join(" ")}</p>
                </div>
                <div className="confirm-detail">
                    <div className="info-title">发票信息</div>
                    <p className="info-detail">发票类型：电子发票</p>
                    <p className="info-detail">发票抬头：个人</p>
                    <p className="info-detail">发票内容：购买商品明细</p>
                </div>
                <div className="confirm-table-title clear">
                    <span className="name fn-left">商品信息</span>
                    <span className="subtotal fn-right">小计</span>
                    <span className="num fn-right">数量</span>
                    <span className="price fn-right">单价</span>
                </div>
                <div className="confirm-goods-table">
                    {
                        this.props.order.items.map( item => {
                            var title = `${item.title} (${item.subTitle}) (${item.name})`;

                            return (
                                <div key={item.itemId} className="cart-items clear">
                                    <div className="name fn-left hide-row">
                                        <div className="name-cell">
                                            <Link to={"/detail/" + item.itemId} title={title} target="_blank">{title}</Link><br/>
                                        </div>
                                    </div>
                                    <div className="subtotal fn-right">
                                        <div className="subtotal-cell">¥ {(item.price * item.quantity / 100).toFixed(2)}</div>
                                    </div>
                                    <div className="goods-num fn-right">1</div>
                                    <div className="price fn-right">¥ {(item.price / 100).toFixed(2)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="order-discount-line">
                    <p> 商品总计： <span>¥ {(this.props.rs.total /100).toFixed(2)}</span> </p>
                    <p> 运费： <span>+ ¥ 0.00</span> </p>
                </div>
            </div>
        );
    }
}

export default Detail;