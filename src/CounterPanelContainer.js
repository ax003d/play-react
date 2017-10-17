import React, { Component } from 'react';
import store from './Store';
import CounterPanel from './CounterPanel';

class CounterPanelContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        };

        this.onCountUpdate = this.onCountUpdate.bind(this);
    }

    onCountUpdate() {
        let counters = store.getState();
        let sum = 0;
        for (let key of Object.keys(counters)) {
            sum += counters[key];
        }
        this.setState({sum: sum});
    }

    componentDidMount() {
        store.subscribe(this.onCountUpdate);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onCountUpdate);
    }

    render() {
        return (
            <CounterPanel sum={this.state.sum} />
        );
    }
}

export default CounterPanelContainer;
