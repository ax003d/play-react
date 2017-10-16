import React, { Component } from 'react';
import Counter from './Counter';
import store from './Store';

class CounterPanel extends Component {

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
            <div>
                <Counter caption="first" />
                <Counter caption="second" />
                <hr/>
                <p>Total: {this.state.sum}</p>
            </div>
        );
    }
}

export default CounterPanel;
