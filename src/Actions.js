import * as ActionTypes from './ActionTypes';

export const init = (caption) => {
    return {
        type: ActionTypes.INIT,
        caption: caption
    };
};

export const increment = (caption) => {
    return {
        type: ActionTypes.INCREMENT,
        caption: caption
    };
};

export const decrement = (caption) => {
    return {
        type: ActionTypes.DECREMENT,
        caption: caption
    };
};
