import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counter from '../reducer/index'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    counter
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;