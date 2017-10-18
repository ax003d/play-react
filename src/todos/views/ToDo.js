import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from './addToDo';
import ToDoItem from './ToDoItem';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_UNCOMPLETED } from '../../constants';

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
        todos: state.todo.filter((todo) => {
          if ( state.filter === FILTER_ALL ) {
              return true;
          } else if ( state.filter === FILTER_COMPLETED && todo.completed ) {
              return true;
          } else if ( state.filter === FILTER_UNCOMPLETED && !todo.completed ) {
              return true;
          } else {
              return false;
          }
        })
    };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps)(ToDo);
