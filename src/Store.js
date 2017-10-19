import { createStore, applyMiddleware, compose } from 'redux';
import { citySelectorReducer } from './reducer';
import thunkMiddleware from 'redux-thunk'

const win = window;

const middlewares = [thunkMiddleware];
const enhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(citySelectorReducer, {city: '101280101', status: 'load_failed'}, enhancers);
