import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';

function CounterPanel({sum}) {
    return (
        <div>
            <Counter caption="first" />
            <Counter caption="second" />
            <hr />
            <p>Total: {sum}</p>
        </div>
    );
}

function mapStateToProps(state) {
    let sum = 0;
    for (const key in state) {
        sum += state[key];
    }
    return {
        sum: sum
    }
}

export default connect(mapStateToProps)(CounterPanel);
