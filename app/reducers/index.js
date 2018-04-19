import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import beaufort from 'beaufort-scale';

import { CELSIUS } from '../constants';
import { getSearchTerm } from '../utils/query';
import { getIsMetric } from '../utils/measurement';
import { SAVE_LOCATION_RESULTS, SET_LOADING } from '../actions';

const isLoading = (state = true, {type, payload}) => {
    let newState = state;

    if (type === SET_LOADING) {
        newState = payload;
    }

    if (type === SAVE_LOCATION_RESULTS) {
        newState = false;
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

const temperatureUnit = (state = CELSIUS, { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        const { units } = payload.weatherResults;

        newState = units.temperature;
    }
    return newState;
};

const weatherInfo = (state = false, { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        const weatherInfo = payload.weatherResults;

        const isMetric = getIsMetric(weatherInfo.units);
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
