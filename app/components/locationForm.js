import React from 'react';
import classNames from 'classnames';
import {Field, reduxForm} from 'redux-form';

import {LOCATION_FORM_NAME} from '../constants';

import './locationForm.scss';

const LocationForm = (props) => {
    const {handleSubmit, onChange, pristine, submitting} = props;
    const disabled = pristine || submitting;

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
                className="form__input--location"
                component="input"
                name="location"
                placeholder="Tokyo, Japan"
                type="text"
                onChange={ onChange }
            />
            <button type="submit" className={ submitButtonClasses } disabled={ disabled }>
                <i aria-hidden="true" className="fa fas fa-search"></i>
            </button>
        </div>
    </form>);
};

export default reduxForm({
    form: LOCATION_FORM_NAME
})(LocationForm);
