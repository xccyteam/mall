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