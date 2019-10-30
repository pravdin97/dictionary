// @flow

import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);

const addPair = (russian: string, english: string): void => {
    store.dispatch({
        type: 'ADD_PAIR',
        russian: russian,
        english: english,
    });
};

const removePair = (id: string): void => {
    store.dispatch({
        type: 'REMOVE_PAIR',
        id: id,
    });
};

const setFilter = (filter: string): void => {
    store.dispatch({
        type: 'SET_SORTING',
        filter: filter,
    })
}

export {
    store,
    addPair,
    removePair,
    setFilter
}