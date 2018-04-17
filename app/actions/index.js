import axios from 'axios';

import {
    getTimezoneUrl,
    getWeatherUrl,
    parseQueryResponse
} from '../utils/query';
import { sendLocationError } from '../utils/error';

export const SAVE_LOCATION_RESULTS = 'SAVE_LOCATION_RESULTS';
const _saveLocationResults = (data) => ({
    type: SAVE_LOCATION_RESULTS,
    payload: data
});

const onError = (dispatch) => dispatch(sendLocationError());

function _getLocationResults(weatherResults) {
    return async (dispatch) => {
        function onSuccess(timeZoneResults, weatherResults) {
            dispatch(_saveLocationResults({weatherResults, timeZoneResults}));
        }

        try {
            const { item } = weatherResults;
            const timeZoneResults = await axios.get(getTimezoneUrl(item.lat, item.long));

            return onSuccess(timeZoneResults.data, weatherResults);
        } catch (error) {
            return onError(dispatch);
        }
    };
}

export default function getWeatherData(searchLocation) {
    return async (dispatch) => {
        function onSuccess(response) {
            dispatch(_getLocationResults(response));
        }

        try {
            const weatherResults = await axios.get(getWeatherUrl(searchLocation));

            return onSuccess(parseQueryResponse(weatherResults.data));
        } catch (error) {
            return onError(dispatch);
        }
    };
}
