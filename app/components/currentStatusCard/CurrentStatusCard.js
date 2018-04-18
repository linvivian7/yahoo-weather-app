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
                <span> { `${temp}` }<i className="wi wi-degrees"></i></span>
            </div>
            <div className="divider" />
            <div className="humidity-wrapper">
                <span> { `${atmosphere.humidity}` }</span>
                <i className="wi wi-humidity"></i>
            </div>
        </div>
    );
};

export default CurrentStatusCard;
