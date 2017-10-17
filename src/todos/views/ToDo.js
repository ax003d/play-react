import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from './addToDo';

function ToDo ({ todos }) {
    return (
        <div>
            <AddToDo />
            <div>
                <ul>
                {
                    todos.map((todo) => (<li>{ todo.text }</li>))
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
