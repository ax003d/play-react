import React, { Component } from 'react';
import Counter from './Counter';
import CounterStore from './CounterStore';

class CounterPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        };

        this.onCountUpdate = this.onCountUpdate.bind(this);
    }

    onCountUpdate() {
        let counters = CounterStore.getCounterValues();
        let sum = 0;
        for (let key of Object.keys(counters)) {
            sum += counters[key];
        }
        this.setState({sum: sum});
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onCountUpdate);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onCountUpdate);
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
