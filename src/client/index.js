// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import { store } from './store/actions'

const root: ?Element = document.getElementById('root');

if (root != null) {
    ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>,
        root
    );
}