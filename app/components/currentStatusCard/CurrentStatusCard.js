import React from 'react';

import './currentStatusCard.scss';

const CurrentStatusCard = ({ searchTerm, condition }) => (
    <div className="card current-status-container">
        <div className="temperature">
            <span> { `${condition.temp}` } </span><i className="wi wi-degrees"></i>
        </div>
        <div className="location">
            { searchTerm }
        </div>
        <div className="weather-icon">
            <i className="wi wi-yahoo-32"></i>
        </div>
    </div>
);

export default CurrentStatusCard;
