import React from 'react';

import './forecastCard.scss';

const ForecastCard = ({ item, index }) => {
    debugger;

    return (
        <div className={ `forecast-container-${index}` }>
            <div className="location-name">
                { `${item.text}` }
            </div>
        </div>
    );
};

export default ForecastCard;
