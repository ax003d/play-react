import * as ActionTypes from './actionTypes';

export const citySelectorReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.CITY_SELECTED:
            return {...state, city: action.city};
        case ActionTypes.WEATHER_LOADING:
            return {...state, status: 'loading'};
        case ActionTypes.WEATHER_LOADED:
            return {...state, status: 'loaded', weatherInfo: action.weatherInfo};
        case ActionTypes.WEATHER_LOAD_FAILED:
            return {...state, status: 'load_failed'};
        default:
            return state;
    }
}
