import React from 'react';
import { connect } from 'react-redux';
import { cityChanged } from './actions';

function CitySelector ({ city, onChange }) {
    return (
        <select value={city} onChange={onChange} >
            <option value='101010100'>北京</option>
            <option value='101020100'>上海</option>
            <option value='101280101'>广州</option>
            <option value='101280601'>深圳</option>
        </select>
    );
}

function mapStateToProps(state) {
    return {
        city: state.city
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange(event) {
            dispatch(cityChanged(event.target.value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);