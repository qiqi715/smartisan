import React, {Component} from 'react';

import '../../assets/css/checkout.css';
import Address from './address';
import Invoice from './invoice';
import Cart from './cart';

class Checkout extends Component {
    render() {
        return (
            <div className="content page-order-checkout checkout">
                <Address/>
                <Invoice/>
                <Cart/>
            </div>
        );
    }
}

export default Checkout;