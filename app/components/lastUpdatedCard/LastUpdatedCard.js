import React from 'react';

import './lastUpdatedCard.scss';

const LastUpdatedCard = ({ condition }) => (
    <div className="last-updated-container">
        { `Last updated: ${condition.date}` }
    </div>
);

export default LastUpdatedCard;
