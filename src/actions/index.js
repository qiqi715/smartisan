import axios from 'axios';

/*更新提示框信息*/
export const updatePrompt = (prompt) => {
    return (dispatch) => {
        dispatch({
            type: "PROMPT_UPDATE",
            payload: prompt
        })
    }
}

/*获取商品*/
export const fetchItems = () => {
    return (dispatch) => {
        axios({
                method: 'get',
                url: '/api/item'
            })
            .then( res => {
                dispatch({
                    type: "ITEMS_UPDATE",
                    payload: res.data.data
                });
            });
    }
}

/*用户登录*/
export const userLogin = (username, password) => {
    return (dispatch) => {
        return axios({
                method: 'post',
                url: '/api/user/login',
                data: {
                    username,
                    password
                }
            })
            .then( res => {
                if (!res.data.code) {
                    dispatch({
                        type: "USER_UPDATE",
                        payload: res.data.data
                    });
                }
                return Promise.resolve(res.data);
            });
    }
}

/*用户退出*/
export const userLoginOut = () => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/user/logout'
        })
        .then( res => {
            if (!res.data.code) {
                dispatch({
                    type: "USER_UPDATE",
                    payload: res.data.data
                });
            }
        });
    }
}

/*用户验证是否登录*/
export const userVerify = () => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/user/verify'
        })
            .then( res => {
                if (!res.data.code) {
                    dispatch({
                        type: "USER_UPDATE",
                        payload: res.data.data
                    });
                }
            })
    }
}

/*更新购物车*/
export const cartUpdate = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: '/api/cart'
            })
            .then( res => {
                if (!res.data.code) {
                    dispatch({
                        type: 'CARTS_UPDATE',
                        payload: res.data.data
                    });
                    localStorage.setItem('isCartsNew', JSON.stringify(false));
                    localStorage.setItem('carts', JSON.stringify(res.data.data));
                }
            })
    }
}

/*添加购物车*/
export const cartAdd = (item_id, quantity) => {
    return (dispatch) => {
        return axios({
                method: 'post',
                url: '/api/cart/add',
                data: {
                    item_id,
                    quantity
                }
            })
            .then( res => {
                if (!res.data.code) {
                    dispatch(cartUpdate())
                }
                return Promise.resolve(res.data)
            })
    }
}

/*减持购物车*/
export const cartReduce = (item_id, cart_id, quantity) => {
    return (dispatch) => {
        console.log(quantity);

        return axios({
                method: 'post',
                url: '/api/cart/reduce',
                data: {
                    item_id,
                    cart_id,
                    quantity
                }
            })
            .then( res => {
                if (!res.data.code) {
                    dispatch(cartUpdate())
                }
                return Promise.resolve(res.data)
            })
    }
}

/*选中某件商品*/
export const cartChecked = (cart_id, checked) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/cart/checked',
            data: {
                cart_id,
                checked
            }
        })
        .then( res => {
            if (!res.data.code) {
                dispatch(cartUpdate())
            }
        })
    }
}

/*删除某件商品*/
export const cartDelete = (cart_id) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: '/api/cart/delete',
            data: {
                cart_id
            }
        })
            .then( res => {
                if (!res.data.code) {
                    dispatch(cartUpdate())
                }
                return Promise.resolve(res.data)
            })
    }
}

/*清空购物车*/
export const cartClear = () => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: '/api/cart/clear'
        })
            .then( res => {
                if (!res.data.code) {
                    dispatch(cartUpdate())
                }
                return Promise.resolve(res.data)
            })
    }
}
