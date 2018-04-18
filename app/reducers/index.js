import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import beaufort from 'beaufort-scale';
import { getSearchTerm } from '../utils/query';
import { SAVE_LOCATION_RESULTS, SET_LOADING } from '../actions';

const isLoading = (state = false, {type, payload}) => {
    let newState = state;

    if (type === SET_LOADING) {
        newState = payload;
    }
    return newState;
};

const searchTerm = (state = 'Tokyo, JP', { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        newState = getSearchTerm(payload.weatherResults);
    }
    return newState;
};

const timezone = (state = { timeZoneId: 'Asia/Tokyo' }, { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        newState = payload.timeZoneResults;
    }
    return newState;
};

const temperatureUnit = (state = 'c', { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        const { units } = payload.weatherResults;

        newState = units.temperature.toLowerCase();
    }
    return newState;
};

const weatherInfo = (state = false, { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        const weatherInfo = payload.weatherResults;
        const isMetric = weatherInfo.units.speed === 'km/h';
        const { speed } = weatherInfo.wind;
        const metricSpeed = isMetric ? speed  : speed / 0.62137;
        const beaufortWindScore = beaufort(metricSpeed);

        newState = {
            ...weatherInfo,
            wind: {
                ...weatherInfo.wind,
                beaufortWindScore
            }
        };
    }
    return newState;
};

export default combineReducers({
    form,
    routing,
    isLoading,
    searchTerm,
    temperatureUnit,
    timezone,
    weatherInfo
});
