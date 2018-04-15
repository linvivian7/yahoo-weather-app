import React from 'react';
import { connect } from 'react-redux';

import { dummyAction } from '../actions';
import Page from './Page';

const _mapStateToProps = (state) => (
    state
);

const _mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps
)(Page);
