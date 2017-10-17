import React, { Component } from 'react';
import { view as ToDo } from './todos';

class ToDoApp extends Component {
    render() {
        return (
            <div>
                <ToDo />
            </div>
        );
    }
}

export default ToDoApp;