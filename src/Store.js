import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as toDoReduer } from './todos';

const reducer = combineReducers({
    todo: toDoReduer
});

export default createStore(reducer);
