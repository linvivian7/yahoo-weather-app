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
        <div className="card current-status-container">
            <div className="weather-icon">
                <i className={ weatherIconClasses }></i>
            </div>
            <div className="location">
                { searchTerm }
            </div>
            <div className="date">
                { getDisplayDateTime(date) }
            </div>
            <div className="temperature">
                <span> { `${temp}` }<i className="wi wi-degrees"></i></span>
            </div>
            <div className="divider" />
            <div className="humidity">
                <span> { `${atmosphere.humidity}` }</span>
                <i className="wi wi-humidity"></i>
            </div>
        </div>
    );
};

export default CurrentStatusCard;
