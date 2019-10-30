// @flow

type State = {
    filter: string,
};

type Action = {
    +type: 'SET_SORTING',
    +filter: string,
};

const initialState: State = {
    filter: '',
}

export default function(state: State = initialState, action: Action) {
    switch(action.type) {
        case 'SET_SORTING': return action.filter;
        default: return state;
    }
}