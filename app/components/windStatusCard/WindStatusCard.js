import React from 'react';
import classNames from 'classnames';

import './windStatusCard.scss';

const WindStatusCard = ({ wind }) => {
    const {
        beaufortWindScore,
        direction,
        speed
    } = wind;
    const directionClassName = classNames(
        'wi',
        'wi-wind',
        `towards-${ Math.round(direction) }-deg`
    );
    const beaufortClassName = classNames(
        'wi',
        `wi-wind-beaufort-${ Math.round(beaufortWindScore.grade) }`
    );

    return (
        <div className="card wind-status-container">
            <div className="half-inner-card">
                <i className={ directionClassName }></i>
            </div>
            <div className="third-inner-card">
                { beaufortWindScore.desc }
            </div>
            <div className="half-inner-card">
                <i className={ beaufortClassName }></i>
            </div>
        </div>
    );
};

export default WindStatusCard;
