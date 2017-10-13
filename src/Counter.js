import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count || 0
        }
        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
    }

    onPlusClick() {
        this.setState({count: this.state.count + 1});
    }

    onMinusClick() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.onPlusClick}>+</button>
                <button onClick={this.onMinusClick}>-</button>
                <p>{this.props.caption} : {this.state.count}</p>
            </div>
        );
    }    
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default Counter;