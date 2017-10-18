import React from 'react';
import { toggleTodo, removeTodo } from '../actions';
import { connect } from 'react-redux';

function ToDoItem ({id, text, completed, onToggle, onRemove}) {
    const checkProps = completed ? {checked: true}: {};
    return (
        <li
          style={{
              textDecoration: completed ? 'line-through' : 'none'
          }}>
            <input type='checkbox' {...checkProps} onClick={onToggle} />
            <label>{ text }</label>
            <button onClick={onRemove}>x</button>
        </li>
    );
};

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onToggle() {
            dispatch(toggleTodo(ownProps.id));
        },
        onRemove() {
            dispatch(removeTodo(ownProps.id));
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoItem);
