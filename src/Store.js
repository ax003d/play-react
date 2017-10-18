import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as toDoReduer } from './todos';
import { reducer as filterReducer } from './filter';
import { FILTER_ALL } from './constants';

const win = window;

const reducer = combineReducers({
    todo: toDoReduer,
    filter: filterReducer
});

const middlewares = [];

if (process.env.NODE_DEV !== 'production') {
    // middlewares.push(require('redux-immutable-state-invariant'));
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {filter: FILTER_ALL}, storeEnhancers);
