import { replace } from 'react-router-redux';
import { BASE_URL, FORECAST_URL } from '../constants';

export const getLinkHandlers = (dispatch) => ({
    onHomePageLinkClick: () => {
        console.log('home');
        dispatch(replace(BASE_URL));
    },
    onForecastLinkClick: () => {
        console.log('forecast');
        dispatch(replace(FORECAST_URL));
    }
});
