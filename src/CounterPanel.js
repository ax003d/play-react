import React, { Component } from 'react';
import Counter from './Counter';

class CounterPanel extends Component {

    constructor(props) {
        super(props);
        this.counters = {};
        this.state = {
            sum: 0
        };

        this.onCountUpdate = this.onCountUpdate.bind(this);
    }

    onCountUpdate(caption, val) {
        this.counters[caption] = val;
        let sum = 0;
        for (let key of Object.keys(this.counters)) {
            sum += this.counters[key];
        }
        this.setState({sum: sum});
    }

    render() {
        return (
            <div>
                <Counter caption="first" onCountUpdate={this.onCountUpdate} />
                <Counter caption="second" onCountUpdate={this.onCountUpdate} />
                <hr/>
                <p>Total: {this.state.sum}</p>
            </div>
        );
    }
}

export default CounterPanel;
