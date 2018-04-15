import React from 'react';
import { stopSubmit } from 'redux-form';
import { connect } from 'react-redux';

import getWeatherData from '../actions';
import { LOCATION_FORM_NAME } from '../constants';
import Page from './Page';

const _mapStateToProps = (state) => (
    state
);

const _mapDispatchToProps = (dispatch) => ({
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
)(Page);
