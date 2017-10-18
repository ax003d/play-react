import * as ActionTypes from './actionTypes';

export const setFilter = (filter) => {    
    return {
        "type": ActionTypes.SET_FILTER,
        "filter": filter
    };
};
