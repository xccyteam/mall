import React from 'react';
import ReactDOM from 'react-dom';
import Router from './route';
// react-hot-loader 不会刷新整个页面，它只替换了修改的代码，做到了页面的局部刷新
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './less/reset.less';
import './less/method.less';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}
render(Router)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./route', () => {
        render(Router);
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
