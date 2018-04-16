import React from 'react';

import './locationCard.scss';

const LocationCard = ({ location }) => (
    <div className="location-name-container">
        <div className="location-name">
            { `${location.city}, ${location.country}` }
        </div>
    </div>
);

export default LocationCard;
