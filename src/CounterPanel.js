import React from 'react';
import CounterContainer from './CounterContainer';

function CounterPanel({sum}) {
    return (
        <div>
            <CounterContainer caption="first" />
            <CounterContainer caption="second" />
            <hr />
            <p>Total: {sum}</p>
        </div>
    );
}

export default CounterPanel;
