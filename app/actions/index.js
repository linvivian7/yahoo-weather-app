import axios from 'axios';

import {
    getGeocodeUrl,
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

function _getTimeZone(latitude, longitude) {
    return async (dispatch) => {
        function onSuccess(response) {
            dispatch(_saveTimezone(response));
        }

        try {
            const response = await axios.get(getTimezoneUrl(latitude, longitude));

            return onSuccess(response);
        } catch (error) {
            return onError(dispatch);
        }
    };
}

function _getLocalTime(location) {
    return async (dispatch) => {
        function onSuccess(response) {
            const { data: { results }} = response;

            if (results && results[0]) {
                const { lat, lng } = results[0].geometry.location;

                dispatch(_getTimeZone(lat, lng));
            }
        }

        try {
            const cityAndCountry = `${location.city},${location.country}`;
            const response = await axios.get(getGeocodeUrl(cityAndCountry));

            return onSuccess(response);
        } catch (error) {
            return onError(dispatch);
        }
    };
}


export default function getWeatherData(searchLocation) {
    return async (dispatch) => {
        function onSuccess(response) {
            const { location } = parseQueryResponse(response.data);

            dispatch(_getLocalTime(location));
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
