import React from 'react';

import './currentStatusCard.scss';

const CurrentStatusCard = ({ atmosphere, condition, searchTerm }) => {
    const {
        date,
        temp
    } = condition;
    const [dayOfWeek, dateTime] = date.split(',');
    const splitDateTime = dateTime.split(' ');
    const day = splitDateTime[1];
    const month = splitDateTime[2];

    return (
        <div className="card current-status-container">
            <div className="weather-icon">
                <i className="wi wi-yahoo-32"></i>
            </div>
            <div className="location">
                { searchTerm }
            </div>
            <div className="date">
                { `${dayOfWeek} ${month} ${day}` }
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
