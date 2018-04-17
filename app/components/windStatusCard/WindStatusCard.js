import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import './windStatusCard.scss';

export default class WindStatusCard extends React.PureComponent {

    render() {
        const {
            beaufortWindScore,
            direction,
            speed
        } = this.props.wind;
        const currentTime = moment();
        const currentLocalTime = currentTime.tz(this.props.timezone.timeZoneId);

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
                'image-night': currentLocalTime.hours() >= 17 && currentLocalTime.hours() <= 5
            }
        );

        return (
            <div className={ windContainerClasses }>
                <div className="half-inner-card">
                    <i className={ directionClasses }></i>
                </div>
                <div className="third-inner-card">
                    { beaufortWindScore.desc }
                </div>
                <div className="half-inner-card">
                    <i className={ beaufortClasses }></i>
                </div>
            </div>
        );
    }
};
