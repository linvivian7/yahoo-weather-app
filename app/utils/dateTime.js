import moment from 'moment';

const _removeTimezone = (date) => date.split(' ').slice(0,-1).join(' ');

const _getMomentDateTime = (date) => (
    moment(_removeTimezone(date), 'ddd, D MMM YYYY hh:mm A')
);

export const getDisplayDateTime = (date) => (
    _getMomentDateTime(date).format('ddd MMM D YYYY')
);

export const getSunriseSunsetTime = (time) => (
    moment(time, 'h:m A').format('h:mm A')
);
