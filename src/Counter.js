import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterStore from './CounterStore';
import * as Actions from './Actions';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: CounterStore.getCounterValue(props.caption)
        }

        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onPlusClick() {
        Actions.increment(this.props.caption);
    }

    onMinusClick() {
        Actions.decrement(this.props.caption);
    }

    onChange() {
        this.setState({count: CounterStore.getCounterValue(this.props.caption)});
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
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

Counter.defaultProps = {
    count: 10
};

export default Counter;