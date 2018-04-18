import React from 'react';
import { stopSubmit } from 'redux-form';
import { connect } from 'react-redux';

import { getLinkHandlers } from '../utils/link';
import getWeatherData from '../actions';
import { CELSIUS, LOCATION_FORM_NAME } from '../constants';
import WeatherHomePage from './WeatherHomePage';

const _mapStateToProps = (state) => state;

const _mapDispatchToProps = (dispatch) => ({
    ...getLinkHandlers(dispatch),
    onChange: () => {
        dispatch(stopSubmit(LOCATION_FORM_NAME, {}));
    },
    onSubmit: ({ location }, unit = CELSIUS) => {
        debugger;
        console.log('unit on submit', unit);
        dispatch(getWeatherData(location, unit));
    }
});

export default connect(
    _mapStateToProps,
    _mapDispatchToProps
)(WeatherHomePage);
