import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from './Actions';
import store from './Store';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.getOwnState = this.getOwnState.bind(this);

        store.dispatch(Actions.init(this.props.caption));
        this.state = this.getOwnState();

        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        return {
            count: store.getState()[this.props.caption]
        };
    }

    onPlusClick() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onMinusClick() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
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