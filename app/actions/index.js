import axios from 'axios';

import {
    getTimezoneUrl,
    getWeatherUrl,
    parseQueryResponse
} from '../utils/query';
import { sendLocationError } from '../utils/error';

export const SAVE_WEATHER = 'SAVE_WEATHER';
const _saveWeather = ({ data }) => ({
    type: SAVE_WEATHER,
    payload: data
});

export const SAVE_TIMEZONE = 'SAVE_TIMEZONE';
const _saveTimezone = ({ data }) => ({
    type: SAVE_TIMEZONE,
    payload: data
});

const onError = (dispatch) => dispatch(sendLocationError());

function _getLocalTime(results) {
    return async (dispatch) => {
        function onSuccess(response) {
            dispatch(_saveTimezone(response));
        }

        try {
            const { lat, long } = results;
            const response = await axios.get(getTimezoneUrl(lat, long));

            return onSuccess(response);
        } catch (error) {
            return onError(dispatch);
        }
    };
}

export default function getWeatherData(searchLocation) {
    return async (dispatch) => {
        function onSuccess(response) {
            const { item } = parseQueryResponse(response.data);

            dispatch(_getLocalTime(item));
            dispatch(_saveWeather(response));
        }

        try {
            const response = await axios.get(getWeatherUrl(searchLocation));

            return onSuccess(response);
        } catch (error) {
            return onError(dispatch);
        }
    };
}
