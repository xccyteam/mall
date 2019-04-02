import * as types from './actionsTypes'
export const increment = (num)=> {
    return {
        type: types.INCREMENT,
        num
    }
};
export const decrement = (num)=> {
    return {
        type: types.DECREMENT,
        num
    }
};

export const setToken = (token) => {
    return {
        type: types.SETTOKEN,
        token
    }
}

export const delToken = () => {
    return {
        type: types.DELTOKEN
    }
}