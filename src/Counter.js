import React from 'react';
import * as Actions from './Actions';
import { connect } from 'react-redux';

function Counter({caption, onPlusClick, onMinusClick, count}) {
    return (
        <div>
            <button onClick={onPlusClick}>+</button>
            <button onClick={onMinusClick}>-</button>
            <p>{caption} : {count}</p>
        </div>        
    );
}

function mapStateToProps(state, ownProps) {
    let count = state[ownProps.caption];
    return {
        count: count === undefined ? 0 : count
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onPlusClick () {
            dispatch(Actions.increment(ownProps.caption));
        },
        onMinusClick () {
            dispatch(Actions.decrement(ownProps.caption));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
