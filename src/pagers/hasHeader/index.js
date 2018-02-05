import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import Header from  '../../componnets/header';

import Main from '../main';
import Detail from '../detail';
import Cart from '../cart';
import User from '../user';

import Checkout from '../checkout';
import Payment from '../payment';


class HasHeader extends Component {

    render() {
        return (
            <div>
                <Header/>

                <div id="main">
                    <Route exact path="/" component={Main} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/user" component={User} />

                    <Route path="/checkout" component={Checkout} />
                    <Route path="/payment/:id" component={Payment} />
                </div>
            </div>
        );
    }
}

export default HasHeader;
