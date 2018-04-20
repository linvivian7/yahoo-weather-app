import React from 'react';
import classNames from 'classnames';
import {Field, reduxForm} from 'redux-form';

import {LOCATION_FORM_NAME} from '../../../constants';

import './locationForm.scss';

const LocationForm = (props) => {
    const {
        error,
        handleSubmit,
        onChange,
        submitting,
        pristine,
        location
    } = props;

    const disabled = pristine || submitting;
    const formInputClasses = classNames(
        'form__location-input',
        {
            'form__location-input--error': !!error
        }
    );
    const submitButtonClasses = classNames(
        'form__btn',
        {
            'form__btn--disabled': disabled
        }
    );

    return (
        <form onSubmit={ handleSubmit }>
        <div className="form__input-container">
            <Field
                className={ formInputClasses }
                component="input"
                name="location"
                placeholder={ location }
                type="text"
                onChange={ onChange }
            />
            <button type="submit" className={ submitButtonClasses } disabled={ disabled }>
                <span className="icon-search" aria-hidden="true"></span>
            </button>
        </div>
    </form>);
};

export default reduxForm({
    form: LOCATION_FORM_NAME
})(LocationForm);
