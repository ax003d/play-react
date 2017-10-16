import * as ActionTypes from './ActionTypes';

export default (state, action) => {
    let val;
    if (state[action.caption] === undefined) {
        val = 0;
    } else {
        val = state[action.caption];
    }

    switch (action.type) {
        case ActionTypes.INIT:
            return {...state, [action.caption]: 0};
        case ActionTypes.INCREMENT:
            return {...state, [action.caption]: val + 1};
        case ActionTypes.DECREMENT:
            return {...state, [action.caption]: val - 1};
        default:
            return state;
    }
}