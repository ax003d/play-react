import React from 'react';
import { connect } from 'react-redux';
import AddToDo from './addToDo';
import ToDoItem from './ToDoItem';
import todoSelector from '../selector';

function ToDo ({ todos }) {
    return (
        <div>
            <AddToDo />
            <div>
                <ul>
                {
                    todos.map((todo) => {
                        return (
                            <ToDoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
                        );
                    })
                }
                </ul>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        todos: todoSelector(state)
    };
}

export default connect(mapStateToProps)(ToDo);
