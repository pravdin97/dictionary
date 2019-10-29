import uuid from 'uuidv4';

const initialSate = [{
    id: uuid(),
    russian: 'собака',
    english: 'dog',
},{
    id: uuid(),
    russian: 'кошка',
    english: 'cat',
}]

export default function (state = initialSate, action = {}) {
    switch(action.type) {
        case 'ADD_PAIR':
            return [...state, {
                id: uuid(),
                russian: action.russian.toLowerCase(),
                english: action.english.toLowerCase(),
            }]

        case 'REMOVE_PAIR':
            return state.filter(pair => pair.id !== action.id)
        default: 
            return state
    }
}