import React from 'react';
import classNames from 'classnames';

import { getDisplayDateTime } from '../../utils/dateTime';
import './currentStatusCard.scss';

const CurrentStatusCard = ({ atmosphere, condition, searchTerm }) => {
    const {
        code,
        date,
        temp
    } = condition;
    const weatherIconClasses = classNames(
        'wi',
        `wi-yahoo-${code}`
    );

    return (
        <div className="current-status-container">
            <div className="weather-icon-wrapper">
                <i className={ weatherIconClasses }></i>
            </div>
            <div className="location-wrapper">
                { searchTerm }
            </div>
            <div className="date-wrapper">
                { getDisplayDateTime(date) }
            </div>
            <div className="temperature-wrapper">
                <span> { `${temp}` }<i className="wi wi-celsius"></i></span>
            </div>
            <div className="humidity-wrapper">
                <span> { `${atmosphere.humidity}` }<i className="wi wi-humidity"></i></span>
            </div>
            <div className="barometer-wrapper">
                <span> { Math.round(atmosphere.visibility) }<i className="fa fas fa-eye"></i></span>
            </div>
        </div>
    );
};

export default CurrentStatusCard;
