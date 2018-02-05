import {
    combineReducers
} from 'redux';

import items from './items';
import carts from './carts';
import user from './user';
import address from './address';
import orders from './orders';
import prompt from './prompt';

export default combineReducers({
    items,
    carts,
    user,
    address,
    orders,
    prompt
});