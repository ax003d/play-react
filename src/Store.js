import { createStore } from 'redux';
import { citySelectorReducer } from './reducer';

export default createStore(citySelectorReducer, {city: '101280101'});
