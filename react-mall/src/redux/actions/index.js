import * as types from './actionsTypes'
export const increment = ()=> {
    return {
        type: types.INCREMENT
    }
};
export const decrement = ()=> {
    return {
        type: types.DECREMENT
    }
};