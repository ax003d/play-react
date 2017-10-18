import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {        
        this.setState({text: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='todo' value={this.state.text} onChange={this.onChange} />
                    <input type='submit' value='Add' />
                </form>
            </div>            
        );
    }
}

function mapDisaptchToProps(dispatch) {
    return {
        add(text) {
            dispatch(addTodo(text));
        },
    }
}

export default connect(null, mapDisaptchToProps)(AddToDo);