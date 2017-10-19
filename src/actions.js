import * as ActionTypes from './actionTypes';

export const cityChanged = (city) => {
    return ({
        type: ActionTypes.CITY_SELECTED,
        city: city
    });
}
