import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increment = (caption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        caption: caption
    });
};

export const decrement = (caption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        caption: caption
    });
};
