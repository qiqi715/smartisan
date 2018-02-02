import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import Header from  '../../componnets/header';

import Main from '../main';
import Detail from '../detail';
import Cart from '../cart';
import Checkout from '../checkout';
import Payment from '../payment';
import User from '../user';
import UserAddress from '../user/address';
import UserOrder from '../user/order';
import UserAddressProp from '../user/address/addressProp';


class HasHeader extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div id="main">
                    <Route exact path="/" component={Main} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/user" component={User} />
                    <Route exact path="/user/address" component={UserAddress} />
                    <Route  path="/user/address/prop" component={UserAddressProp} />
                    <Route path="/user/order" component={UserOrder} />

                </div>
            </div>
        );
    }
}

export default HasHeader;
