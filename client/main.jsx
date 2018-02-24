import React from 'react';
import ReactDOM from 'react-dom';
import  cookie from 'react-cookies';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { AUTH_USER } from './actions/types';
import App from './components/App.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = cookie.load('token');
const user = cookie.load('user');

if (token) {
    store.dispatch({ type: AUTH_USER, payload: user });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('trello-app')
);

