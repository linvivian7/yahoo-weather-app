import React from 'react';
import { stopSubmit } from 'redux-form';
import { connect } from 'react-redux';

import { getLinkHandlers } from '../../utils/link';
import getWeatherData from '../../actions';
import { LOCATION_FORM_NAME } from '../../constants';
import WeatherHomePage from './WeatherHomePage';

const _mapStateToProps = ({ isLoading, searchTerm, timezone, weatherInfo }) => ({
    searchTerm,
    timezone,
    isLoading,
    weatherInfo
});

const _mapDispatchToProps = (dispatch) => ({
    ...getLinkHandlers(dispatch),
    onUnitToggleChange: (searchTerm, unit) => {
        dispatch(getWeatherData(searchTerm, unit));
    },
    onChange: () => {
        dispatch(stopSubmit(LOCATION_FORM_NAME, {}));
    },
    onSubmit: ({ location }) => {
        dispatch(getWeatherData(location));
    }
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps
)(WeatherHomePage);
