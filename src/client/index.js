// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import "@babel/polyfill";

const root: ?Element = document.getElementById('root');

if (root != null) {
    ReactDOM.render(
        <Provider store={createStore(reducer, applyMiddleware(thunk))} >
            <App />
        </Provider>,
        root
    );
}