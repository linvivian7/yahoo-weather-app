import React from 'react';
import classNames from 'classnames';

import './forecastCard.scss';

const ForecastCard = ({ item, index, isMetric }) => {
    const {
        code,
        date,
        high,
        low
    } = item;
    const dayOfWeek = item.day;
    const [day, month] = date.split(' ');
    const forecastCardClasses = classNames(
        'forecast-container',
        `forecast-container-${index}`
    );
    const weatherIconClasses = classNames(
        'wi',
        `wi-yahoo-${code}`
    );
    const temperatureIconClasses = classNames(
        'wi',
        {
            'wi-celsius': isMetric,
            'wi-fahrenheit': !isMetric
        }
    );

    return (
        <div className={ forecastCardClasses }>
            <div className="dayOfWeek">
                { `${dayOfWeek} `}
            </div>
            <div className="weather-icon">
                <i className={ weatherIconClasses }></i>
            </div>
            <div className="temperature-hi">
                <i className="wi wi-direction-up"></i>{ high }<i className={ temperatureIconClasses }></i>
            </div>
            <div className="temperature-low">
                <i className="wi wi-direction-down"></i>{ low }<i className={ temperatureIconClasses }></i>
            </div>
            <div className="date">
                <div>{ `${ month } ${ day } `}</div>
            </div>
        </div>
    );
};

export default ForecastCard;
