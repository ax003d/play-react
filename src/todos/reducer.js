import * as ActionTypes from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [{
                "id": action.id,
                "text": action.text,
                "completed": action.completed
            }, ...state];
        case ActionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id === action.id );
        case ActionTypes.TOGGLE_TODE:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}