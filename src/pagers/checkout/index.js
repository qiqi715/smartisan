import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import '../../assets/css/checkout.css';
import Address from './address';
import Invoice from './invoice';
import Cart from './cart';
import AddressProp from '../user/address/addressProp';
import {
    addressUpdate,
    orderAdd
} from '../../actions';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addrIndex: 0,
            invoiceIndex: 0,
            invoice: ""
        };
    }

    componentWillMount() {
        if (!this.props.address.length) {
            this.props.dispatch(addressUpdate()).then( res => {
                if (!res.code) {
                    this.initAddrIndex(res.data);
                }
            });
        } else {
            this.initAddrIndex(this.props.address);
        }
    }

    /*初始化index*/
    initAddrIndex(data) {
        var index = data.findIndex( addr => addr.isDefault);
        if (index > 0) {
            this.addrSelect(index);
        }
    }

    /*地址选择*/
    addrSelect(addrIndex) {
        this.stateChange("addrIndex", addrIndex);
    }

    /*地址新增的回调函数*/
    addrAddBack() {
        this.addrSelect(this.props.address.length);
    }

    /*发票抬头选择*/
    invoiceChoose(invoiceIndex) {
        this.stateChange("invoiceIndex", invoiceIndex);
    }

    /*发票抬头改变*/
    invoiceChange(invoice) {
        this.stateChange("invoice", invoice);
    }

    /*状态改变*/
    stateChange(attrname, value) {
        this.setState({
            ...this.state,
            [attrname]: value
        });
    }

    /*提交订单*/
    orderSubmit() {
        var address_id =  this.props.address[this.state.addrIndex].id;
        this.props.dispatch(orderAdd(address_id))
            .then( res => {
                if (!res.code) {
                    this.props.history.push('/payment/' + res.data.id);
                }
            });
    }

    render() {
        return (
            <div className="content page-order-checkout checkout">
                <Address
                    address={this.props.address}
                    index={this.state.addrIndex}
                    addrSelect={this.addrSelect.bind(this)}
                />

                <Invoice
                    index={this.state.invoiceIndex}
                    invoice={this.state.invoice}
                    invoiceChoose={this.invoiceChoose.bind(this)}
                    invoiceChange={this.invoiceChange.bind(this)}
                />

                <Cart
                    addrLength={this.props.address.length}
                    orderSubmit={this.orderSubmit.bind(this)}
                />

                <Route path="/checkout/addressProp" render={props => {
                    return <AddressProp {...props}
                        addBack={this.addrAddBack.bind(this)}
                    />
                }}/>
            </div>
        );
    }
}

export default connect(state => {
    return {
        address: state.address
    }
})(Checkout);