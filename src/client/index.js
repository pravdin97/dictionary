import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store, addPair, removePair, setFilter } from './store/actions'

const actions = {
    addPair, removePair, setFilter
}

const render = () => 
    ReactDOM.render(
        <App words={store.getState().words} filter={store.getState().filter} actions={actions}/>,
        document.getElementById('root')
    );

render();
store.subscribe(render);
