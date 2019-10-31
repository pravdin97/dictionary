// @flow

import uuid from 'uuidv4';
import type { Word, Words } from '../Types';

type State = Words;

type ActionAdd = {
    +type: 'ADD_PAIR',
    +id: string,
    +russian: string,
    +english: string,
};

type ActionRemove = {
    +type: 'REMOVE_PAIR',
    +id: string,
};

type ActionFill = {
    +type: 'FILL_PAIRS',
    +words: Words
}

const initialState: State = [];

type Action = ActionAdd | ActionRemove | ActionFill;

export default function (state: State = initialState, action: Action): State {
    switch(action.type) {
        case 'ADD_PAIR':
            (action: ActionAdd);

            return [...state, {
                id: action.id,
                russian: action.russian.toLowerCase(),
                english: action.english.toLowerCase(),
            }];

        case 'REMOVE_PAIR':
            (action: ActionRemove);
            
            return state.filter(pair => pair.id !== action.id);
        
        case 'FILL_PAIRS':
            (action: ActionFill);

            return action.words;

        default: 
            return state
    }
}