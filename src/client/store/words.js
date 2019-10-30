// @flow

import uuid from 'uuidv4';

type Word = {
    +id: string,
    +russian: string,
    +english: string,
};

type State = $ReadOnlyArray<Word>;

type ActionAdd = {
    +type: 'ADD_PAIR',
    +russian: string,
    +english: string,
};

type ActionRemove = {
    +type: 'REMOVE_PAIR',
    +id: string,
};

const initialState: State = [{
    id: uuid(),
    russian: 'собака',
    english: 'dog',
},{
    id: uuid(),
    russian: 'кошка',
    english: 'cat',
}];

type Action = ActionAdd | ActionRemove;

export default function (state: State = initialState, action: Action): State {
    switch(action.type) {
        case 'ADD_PAIR':
            (action: ActionAdd);

            return [...state, {
                id: uuid(),
                russian: action.russian.toLowerCase(),
                english: action.english.toLowerCase(),
            }]

        case 'REMOVE_PAIR':
            (action: ActionRemove);
            
            return state.filter(pair => pair.id !== action.id)
        default: 
            return state
    }
}