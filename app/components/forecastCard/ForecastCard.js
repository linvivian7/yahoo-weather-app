import React from 'react';

import './forecastCard.scss';

const ForecastCard = ({ item, index }) => {
    const {
        date,
        high,
        low
    } = item;
    const dayOfWeek = item.day;
    const [day, month] = date.split(' ');

    return (
        <div className={ `forecast-container-${index}` }>
            <div className="location-name">
                { `${dayOfWeek} ${month} ${day} ${high}`}<i className="wi wi-celsius"></i> { `${low}` } <i className="wi wi-celsius"></i>
            </div>
        </div>
    );
};

export default ForecastCard;
