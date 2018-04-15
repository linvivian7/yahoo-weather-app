import { stopSubmit } from 'redux-form';

export const sendLocationError = () => stopSubmit('locationForm', { 'location': 'Searched location does not yield results', _error: 'No weather information availble for this location' });
