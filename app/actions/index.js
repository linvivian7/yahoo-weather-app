import axios from 'axios';
import { stopSubmit } from 'redux-form';

import { getQueryUrl } from '../utils/query';

export const SAVE_WEATHER = 'SAVE_WEATHER';
const _saveWeather = ({ data }) => ({
    type: SAVE_WEATHER,
    payload: data
});

export default function getWeatherData(location) {
    return async (dispatch) => {
        function onSuccess(response) {
            dispatch(_saveWeather(response));
        }

        function onError() {
            dispatch(stopSubmit('locationForm', { location: 'Searched location does not yield results', _error: 'No weather information availble for this location' }));
        }

        try {
            const response = await axios.get(getQueryUrl(location));
            
            return onSuccess(response);
        } catch (error) {
            return onError();
        }
    };
}
