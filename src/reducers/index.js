import {
    combineReducers
} from 'redux';

import items from './items';
import carts from './carts';
import user from './user';
import prompt from './prompt';

export default combineReducers({
    items,
    carts,
    user,
    prompt
});