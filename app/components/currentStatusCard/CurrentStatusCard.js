import React from 'react';

import './currentStatusCard.scss';

const CurrentStatusCard = ({ condition }) => (
    <div className="card current-status-container">
        <div className="half-inner-card temperature">
            { `${condition.temp}` } <i className="wi wi-celsius"></i>
        </div>
        <div className="half-inner-card weather-icon">
            <i className="wi wi-yahoo-32"></i>
        </div>
    </div>
);

export default CurrentStatusCard;
