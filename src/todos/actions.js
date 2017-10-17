import * as ActionTypes from "./actionTypes";

let todo_id = 0;

export const addTodo = (text) => {    
    return {
        "type": ActionTypes.ADD_TODO,
        "id": todo_id++,
        "text": text,
        "completed": false
    };
};

export const toggleTodo = (id) => {
    return {
        "type": ActionTypes.TOGGLE_TODE,
        "id": id
    };
};

export const removeTodo = (id) => {
    return {
        "type": ActionTypes.REMOVE_TODO,
        "id": id
    };
};