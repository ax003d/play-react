import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_UNCOMPLETED } from '../../constants';

function Filter ({ filter, onSetFilter }) {
    return (
        <div>
            <p>Filter: { filter }</p>
            <p><a href='#' onClick={onSetFilter}>{ FILTER_ALL }</a></p>            
            <p><a href='#' onClick={onSetFilter}>{ FILTER_COMPLETED }</a></p>
            <p><a href='#' onClick={onSetFilter}>{ FILTER_UNCOMPLETED }</a></p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSetFilter(event) {
            dispatch(setFilter(event.target.text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);