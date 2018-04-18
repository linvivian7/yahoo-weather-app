import axios from 'axios';

import {
    getSearchTerm,
    getTimezoneUrl,
    getWeatherUrl,
    parseQueryResponse
} from '../utils/query';
import { sendLocationError } from '../utils/error';

const _shouldUpdateApp = (searchTerm, lastUpdatedTime, temperatureUnit, weatherResults) => (
    (searchTerm !== getSearchTerm(weatherResults)) ||
    (lastUpdatedTime !== weatherResults.item.pubDate) ||
    (temperatureUnit !== weatherResults.units.temperature.toLowerCase())
);

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

            setTimeout(function() {
                dispatch(setLoading(false));
            }, 1000);
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
                temperatureUnit,
                weatherInfo
            } = getState();
            let lastUpdatedTime;

            if (weatherInfo) {
                lastUpdatedTime = weatherInfo.item.pubDate;
            }

            console.log('shouldupdate', _shouldUpdateApp(searchTerm, lastUpdatedTime, temperatureUnit, response));

            if (_shouldUpdateApp(searchTerm, lastUpdatedTime, temperatureUnit, response)) {
                dispatch(_getLocationResults(response));
                dispatch(setLoading(true));
            }
        }

        try {
            const weatherResults = await axios.get(getWeatherUrl(searchTerm, unit));

            return onSuccess(parseQueryResponse(weatherResults.data));
        } catch (error) {
            return onError(dispatch);
        }
    };
}
