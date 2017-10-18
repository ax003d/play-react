import { createSelector } from 'reselect';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_UNCOMPLETED } from '../constants';

const getFilter = (state) => state.filter;
const getTodo = (state) => state.todo;

export default createSelector(
    [getFilter, getTodo],
    (filter, todos) => {
        return todos.filter((todo) => {
            if ( filter === FILTER_ALL ) {
                return true;
            } else if ( filter === FILTER_COMPLETED && todo.completed ) {
                return true;
            } else if ( filter === FILTER_UNCOMPLETED && !todo.completed ) {
                return true;
            } else {
                return false;
            }
          });
    }
);