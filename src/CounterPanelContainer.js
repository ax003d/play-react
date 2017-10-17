import React, { Component } from 'react';
import CounterPanel from './CounterPanel';
import PropTypes from 'prop-types';

class CounterPanelContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            sum: 0
        };

        this.onCountUpdate = this.onCountUpdate.bind(this);
    }

    onCountUpdate() {
        let counters = this.context.store.getState();
        let sum = 0;
        for (let key of Object.keys(counters)) {
            sum += counters[key];
        }
        this.setState({sum: sum});
    }

    componentDidMount() {
        this.context.store.subscribe(this.onCountUpdate);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onCountUpdate);
    }

    render() {
        return (
            <CounterPanel sum={this.state.sum} />
        );
    }
}

CounterPanelContainer.contextTypes = {
    store: PropTypes.object
};

export default CounterPanelContainer;
