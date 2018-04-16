import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import beaufort from 'beaufort-scale';
import { parseQueryResponse } from '../utils/query';
import { SAVE_TIMEZONE, SAVE_WEATHER } from '../actions';

const timezone = (state = false, {type, payload}) => {
    let newState = state;

    if (type === SAVE_TIMEZONE) {
        newState = payload;
    }
    return newState;
};

const weatherInfo = (state = false, {type, payload}) => {
    let newState = state;

    if (type === SAVE_WEATHER) {
        const weatherInfo = parseQueryResponse(payload);
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
    timezone,
    weatherInfo
});
