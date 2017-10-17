import React, { Component } from 'react';
import * as Actions from './Actions';
import store from './Store';
import Counter from './Counter';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.getOwnState = this.getOwnState.bind(this);

        store.dispatch(Actions.init(this.props.caption));
        this.state = this.getOwnState();

        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        return {
            count: store.getState()[this.props.caption]
        };
    }

    onPlusClick() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onMinusClick() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <Counter caption={this.props.caption}
                onPlusClick={this.onPlusClick}
                onMinusClick={this.onMinusClick}
                count={this.state.count} />
        );
    }    
}

export default CounterContainer;