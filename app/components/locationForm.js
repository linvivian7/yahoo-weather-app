import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { LOCATION_FORM_NAME } from '../constants';

const LocationForm = (props) => {
  const {
      handleSubmit,
      error,
      onChange,
      pristine,
      reset,
      submitting
  } = props;

  console.log('location form', props.error);

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Location</label>
        <div>
          <Field
              name="location"
              component="input"
              type="text"
              placeholder="Tokyo, Japan"
              onChange={ onChange }
          />
          { error }
        </div>
      </div>
      <div>
        <button type="submit" disabled={ pristine || submitting }>Submit</button>
        <button type="button" disabled={ pristine || submitting } onClick={ reset }>Clear Location</button>
      </div>
    </form>
    );
};

export default reduxForm({
  form: LOCATION_FORM_NAME
})(LocationForm);
