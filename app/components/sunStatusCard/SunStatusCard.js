import React from 'react';

import { getSunriseSunsetTime } from '../../utils/dateTime';
import './sunStatusCard.scss';

const SunStatusCard = ({ astronomy }) => {
    const { sunrise, sunset } = astronomy;

    return (
        <div className="card sun-status-container">
            <div className="sun-icon-wrapper sunrise-icon">
                <i className="wi wi-sunrise"></i>
            </div>
            <div className="sunrise-text">
                <span>{ getSunriseSunsetTime(sunrise) }</span>
            </div>
            <div className="sunset-text">
                <span>{ getSunriseSunsetTime(sunset) }</span>
            </div>
            <div className="sun-icon-wrapper sunset-icon">
                <i className="wi wi-sunset"></i>
            </div>
        </div>
    );
};

export default SunStatusCard;
