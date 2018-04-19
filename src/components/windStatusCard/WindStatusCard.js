import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import { getSunriseSunsetHours } from '../../utils/dateTime';
import './windStatusCard.scss';

const _getWindUnitWrapper = (distanceUnit, timeUnit) => {
    let windUnitWrapper = (<span>{ `${distanceUnit}` }</span>);

    if (timeUnit) {
        windUnitWrapper = (<span><sup>{ `${distanceUnit}` }</sup>&frasl;<sub>{ `${timeUnit}` }</sub></span>);
    }

    return windUnitWrapper;
};

const WindStatusCard = ({ astronomy, timezone, units, wind }) => {
    const {
        beaufortWindScore,
        direction,
        speed
    } = wind;
    const currentTime = moment();
    const { timeZoneId } = timezone;
    let currentLocalTime;
    let currentHour;
    let windContainerClasses= classNames(
        'wind-status-container',
    );

    if (currentTime && timeZoneId) {
         currentLocalTime= currentTime.tz(timeZoneId);
         currentHour = currentLocalTime.hours();

         const { day, afternoon, night } = getSunriseSunsetHours(astronomy);
         
         windContainerClasses= classNames(
             'wind-status-container',
             {
                 'image-day': currentHour < afternoon && currentHour > day,
                 'image-afternoon': currentHour >= afternoon && currentHour < night,
                 'image-night': currentHour >= night || currentHour <= day
             }
         );
    }

    const directionClasses = classNames(
        'wi',
        'wi-wind',
        `towards-${ Math.round(direction) }-deg`
    );
    const beaufortClasses = classNames(
        'wi',
        `wi-wind-beaufort-${ Math.round(beaufortWindScore.grade) }`
    );

    const [distanceUnit, timeUnit] = units.speed.split('/');

    return (
        <div className={ windContainerClasses }>
            <div className="wind-speed-wrapper">
                { `${Math.round(speed)} ` }
                { _getWindUnitWrapper(distanceUnit, timeUnit) }
            </div>
            <div className="wind-direction-icon-wrapper">
                <i className={ directionClasses }></i>
            </div>
            <div className="wind-description-wrapper">
                { beaufortWindScore.desc }
            </div>
            <div className="wind-beaufort-icon-wrapper">
                <i className={ beaufortClasses }></i>
            </div>
        </div>
    );
};

export default WindStatusCard;
