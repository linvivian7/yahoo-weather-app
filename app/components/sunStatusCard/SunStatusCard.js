import React from 'react';

import './sunStatusCard.scss';

const SunStatusCard = ({ condition }) => (
    <div className="card sun-status-container">
        <div className="half-inner-card sunrise">
            <i className="wi wi-sunrise"></i>
        </div>
        <div className="half-inner-card sunset">
            <i className="wi wi-sunset"></i>
        </div>
    </div>
);

export default SunStatusCard;
