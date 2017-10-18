import React, { Component } from 'react';
import { view as ToDo } from './todos';
import { view as Filter } from './filter';

class ToDoApp extends Component {
    render() {
        return (
            <div>
                <ToDo />
                <Filter />
            </div>
        );
    }
}

export default ToDoApp;