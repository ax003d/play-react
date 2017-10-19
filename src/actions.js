import * as ActionTypes from './actionTypes';

export const cityChanged = (city) => {
    return ({
        type: ActionTypes.CITY_SELECTED,
        city: city
    });
}

export const weatherLoading = () => {
    return ({
        type: ActionTypes.WEATHER_LOADING        
    });
}

export const weatherLoaded = (weatherInfo) => {
    return ({
        type: ActionTypes.WEATHER_LOADED,
        weatherInfo: weatherInfo
    });
}

export const weatherLoadFailed = () => {
    return ({
        type: ActionTypes.WEATHER_LOAD_FAILED    
    });
}

export const fetchWeather = (city) => {
    console.log('fetchWeather');
    return (dispatch) => {
        console.log(city);
        const url = `/data/cityinfo/${city}.html`;
        dispatch(weatherLoading());

        fetch(url).then((resp) => {
            console.log(resp);
            if (resp.status !== 200) {
                dispatch(weatherLoadFailed());
                console.log("fetch weather failed!");
                return;
            }

            resp.json().then((data) => {
                dispatch(weatherLoaded(data.weatherinfo));
            }).catch((error) => {
                dispatch(weatherLoadFailed());
                console.log("parse json failed!");
            });
        }).catch((error) => {
            dispatch(weatherLoadFailed());
            console.log("get resp failed!");
        });
    };
};
