import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from './addToDo';
import ToDoItem from './ToDoItem';

function ToDo ({ todos }) {
    return (
        <div>
            <AddToDo />
            <div>
                <ul>
                {
                    todos.map((todo) => {
                        return (
                            <ToDoItem id={todo.id} text={todo.text} completed={todo.completed} />
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
        todos: state.todo
    };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps)(ToDo);
