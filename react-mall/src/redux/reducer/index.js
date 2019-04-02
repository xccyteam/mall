const defaultState = 0;
export default function test(state = defaultState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.num;
        case 'DECREMENT':
            return state - action.num;
        default:
            return state
    }
};