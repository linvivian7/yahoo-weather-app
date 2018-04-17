import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import './windStatusCard.scss';

const WindStatusCard = ({ wind, units, timezone }) => {
    const {
        beaufortWindScore,
        direction,
        speed
    } = wind;
    const currentTime = moment();
    const currentLocalTime = currentTime.tz(timezone.timeZoneId);
    const directionClasses = classNames(
        'wi',
        'wi-wind',
        `towards-${ Math.round(direction) }-deg`
    );
    const beaufortClasses = classNames(
        'wi',
        `wi-wind-beaufort-${ Math.round(beaufortWindScore.grade) }`
    );
    const windContainerClasses= classNames(
        'card',
        'wind-status-container',
        {
            'image-day': currentLocalTime.hours() < 11 && currentLocalTime.hours() > 5,
            'image-afternoon': currentLocalTime.hours() >= 11 && currentLocalTime.hours() < 17,
            'image-night': currentLocalTime.hours() >= 17 || currentLocalTime.hours() <= 5
        }
    );

    return (
        <div className={ windContainerClasses }>
            <div className="wind-speed">
                { `${Math.round(speed)} ` }<span><sup>km</sup>&frasl;<sub>h</sub></span>
            </div>
            <div className="wind-direction">
                <i className={ directionClasses }></i>
            </div>
            <div className="wind-description">
                { beaufortWindScore.desc }
            </div>
            <div className="wind-beaufort-score">
                <i className={ beaufortClasses }></i>
            </div>
        </div>
    );
};

export default WindStatusCard;
