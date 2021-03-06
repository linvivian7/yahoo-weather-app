import axios from 'axios';

import {
    shouldFetchNewQuery,
    getTimezoneUrl,
    getWeatherUrl,
    parseQueryResponse
} from '../utils/query';
import { sendLocationError } from '../utils/error';

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (isLoading) => ({type: SET_LOADING, payload: isLoading});

export const SAVE_LOCATION_RESULTS = 'SAVE_LOCATION_RESULTS';
const _saveLocationResults = (data) => ({
    type: SAVE_LOCATION_RESULTS,
    payload: data
});

const onError = (dispatch) => {
    dispatch(setLoading(false));
    dispatch(sendLocationError());
};

function _getLocationResults(weatherResults) {
    return async (dispatch) => {
        function onSuccess(timeZoneResults, weatherResults) {
            dispatch(_saveLocationResults({ weatherResults, timeZoneResults }));
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

export default function getWeatherData(searchTerm, unit) {
    return async (dispatch, getState) => {
        function onSuccess(response) {
            const {
                searchTerm,
                weatherInfo
            } = getState();
            let lastUpdatedTime;
            let temperatureUnit;

            if (weatherInfo) {
                temperatureUnit = weatherInfo.units.temperature;
                lastUpdatedTime = weatherInfo.item.pubDate;
            }

            if (shouldFetchNewQuery(searchTerm, lastUpdatedTime, temperatureUnit, response)) {
                dispatch(setLoading(true));
                dispatch(_getLocationResults(response));
            }
        }

        try {
            const { weatherInfo } = getState();
            let preferredUnit = unit;

            if (weatherInfo && !unit) {
                preferredUnit = weatherInfo.units.temperature;
            }

            const weatherResults = await axios.get(getWeatherUrl(searchTerm, preferredUnit));

            return onSuccess(parseQueryResponse(weatherResults.data));
        } catch (error) {
            return onError(dispatch);
        }
    };
}
