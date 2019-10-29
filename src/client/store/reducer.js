import words from './words';
import filter from './filter';

import { combineReducers } from 'redux'

export default combineReducers({
    words: words,
    filter: filter,
})