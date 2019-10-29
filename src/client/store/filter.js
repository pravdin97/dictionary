export default function(state='', action = {}) {
    switch(action.type) {
        case 'SET_SORTING': return action.filter;
        default: return state;
    }
}