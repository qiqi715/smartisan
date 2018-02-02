import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import {
    BrowserRouter
} from 'react-router-dom';
import {
    Provider
} from 'react-redux';
import  {
    createStore,
    applyMiddleware
} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
var store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
