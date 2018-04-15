import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import { parseQueryResponse } from '../utils/query';
import { SAVE_TIMEZONE, SAVE_WEATHER } from '../actions';

const timezone = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === SAVE_TIMEZONE) {
        newState = payload;
    }
    return newState;
};

const weatherInfo = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === SAVE_WEATHER) {
        newState = parseQueryResponse(payload);
    }
    return newState;
};

export default combineReducers({
    form,
    routing,
    timezone,
    weatherInfo
});
