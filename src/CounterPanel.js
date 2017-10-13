import React, { Component } from 'react';
import Counter from './Counter';

class CounterPanel extends Component {

    render() {
        return (
            <div>
                <Counter caption="first" />
                <Counter caption="second" />
            </div>
        );
    }
}

export default CounterPanel;
