import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as toDoReduer } from './todos';
import { reducer as filterReducer } from './filter';
import { FILTER_ALL } from './constants';

const reducer = combineReducers({
    todo: toDoReduer,
    filter: filterReducer
});

export default createStore(reducer, {filter: FILTER_ALL});
