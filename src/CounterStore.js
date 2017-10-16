import {EventEmitter} from 'events';
import AppDispatcher from './AppDispatcher';
import * as ActionTypes from './ActionTypes';

const CHANGE_EVENT = 'changed';

let counters = {};

const CounterSore = Object.assign({}, EventEmitter.prototype, {
    getCounterValue(caption) {
        if (counters[caption] === undefined) {
            counters[caption] = 0;
        }
        return counters[caption];
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT ) {
        counters[action.caption] ++;
        CounterSore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT ) {
        counters[action.caption] --;
        CounterSore.emitChange();
    }
});

export default CounterSore;
