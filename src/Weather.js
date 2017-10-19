import React from 'react';
import { connect } from 'react-redux';

function Weather ({ status, city, weather }) {
    switch (status) {
        case 'loading':
            return <div>Loading...</div>;
        case 'loaded':
            return (
                <div>{ weather.city } : { weather.temp1 } ~ { weather.temp2 }</div>
            );
        case 'load_failed':
            return <div>Load failed!</div>;
        default:
            return <div>Unknown status: { status }</div>
    }
}

function mapStateToProps(state) {
    return {
        status: state.status,
        city: state.city,
        weather: state.weatherInfo
    }
}

export default connect(mapStateToProps)(Weather);