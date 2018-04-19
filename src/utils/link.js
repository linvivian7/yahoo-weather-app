import { replace } from 'react-router-redux';
import { BASE_URL, FORECAST_URL } from '../constants';

export const getLinkHandlers = (dispatch) => ({
    onHomePageLinkClick: () => {
        dispatch(replace(BASE_URL));
    },
    onForecastLinkClick: () => {
        dispatch(replace(FORECAST_URL));
    }
});
