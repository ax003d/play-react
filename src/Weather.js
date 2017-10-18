import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount() {
        const url = '/data/cityinfo/101010100.html';
        fetch(url).then((resp) => {
            console.log(resp);
            if (resp.status !== 200) {
                console.log("fetch weather failed!");
                return;
            }

            resp.json().then((data) => {
                this.setState({weather: data.weatherinfo});
            }).catch((error) => {
                console.log("parse json failed!");
                this.setState({weather: null});
            });
        }).catch((error) => {
            console.log("get resp failed!");
            this.setState({weather: null});
        });
    }

    render() {
        if (!this.state.weather) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <div>{ this.state.weather.city } : { this.state.weather.temp1 } ~ { this.state.weather.temp2 }</div>
            );
        }
    }
}

export default Weather;