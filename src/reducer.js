import * as ActionTypes from './actionTypes';

export const citySelectorReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.CITY_SELECTED:
            return {...state, city: action.city};
        default:
            return state;
    }
}

export const citySelectorReducer1 = (state, action) => {
    switch (action.type) {
        case ActionTypes.CITY_SELECTED:
            return {...state, city: action.city};
        default:
            return state;
    }
}
