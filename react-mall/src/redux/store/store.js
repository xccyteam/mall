import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import test from '../reducer/index'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    test
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;