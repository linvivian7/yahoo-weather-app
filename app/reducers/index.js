import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import beaufort from 'beaufort-scale';
import { getCountryCode } from '../utils/country';
import { SAVE_LOCATION_RESULTS } from '../actions';

const searchTerm = (state = 'Tokyo, JP', { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        const { location } = payload.weatherResults;
        const countryCode = getCountryCode(location.country);

        newState = location.city;

        if (countryCode) {
            newState = `${location.city}, ${countryCode}`;
        }
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

const weatherInfo = (state = false, { type, payload }) => {
    let newState = state;

    if (type === SAVE_LOCATION_RESULTS) {
        const weatherInfo = payload.weatherResults;
        const beaufortWindScore = beaufort(weatherInfo.wind.speed);

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
    searchTerm,
    timezone,
    weatherInfo
});
