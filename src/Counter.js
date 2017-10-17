import React from 'react';

function Counter({caption, onPlusClick, onMinusClick, count}) {
    return (
        <div>
            <button onClick={onPlusClick}>+</button>
            <button onClick={onMinusClick}>-</button>
            <p>{caption} : {count}</p>
        </div>        
    );
}

export default Counter;
