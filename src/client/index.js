// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store, addPair, removePair, setFilter } from './store/actions'

type Actions = {
    addPair(russian: string, english: string): void,
    removePair(id: string): void,
    setFilter(filter: string): void
};

const actions: Actions = {
    addPair,
    removePair, 
    setFilter
}

const root: ?Element = document.getElementById('root');

const render = () => {
    if (root != null)
    ReactDOM.render(
        <App words={store.getState().words} filter={store.getState().filter} actions={actions}/>,
        root
    );
}

render();
store.subscribe(render);
