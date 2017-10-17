import React, { Component } from 'react';
import * as Actions from './Actions';
import Counter from './Counter';
import PropTypes from 'prop-types';

class CounterContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.getOwnState = this.getOwnState.bind(this);

        this.context.store.dispatch(Actions.init(this.props.caption));
        this.state = this.getOwnState();

        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        return {
            count: this.context.store.getState()[this.props.caption]
        };
    }

    onPlusClick() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }

    onMinusClick() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <Counter caption={this.props.caption}
                onPlusClick={this.onPlusClick}
                onMinusClick={this.onMinusClick}
                count={this.state.count} />
        );
    }    
}

CounterContainer.contextTypes = {
    store: PropTypes.object
};

export default CounterContainer;