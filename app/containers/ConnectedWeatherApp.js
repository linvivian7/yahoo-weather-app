import React from 'react';
import { stopSubmit } from 'redux-form';
import { connect } from 'react-redux';

import { getLinkHandlers } from '../utils/link';
import getWeatherData from '../actions';
import { LOCATION_FORM_NAME } from '../constants';
import WeatherApp from './WeatherApp';

const _mapStateToProps = (state) => state;

const _mapDispatchToProps = (dispatch) => ({
    ...getLinkHandlers(dispatch),
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
)(WeatherApp);
