import React from 'react';
import moment from 'moment-timezone';

import { getSunriseSunsetTime } from '../../utils/dateTime';
import './sunStatusCard.scss';

export default class SunStatusCard extends React.PureComponent {

    constructor(props) {
        super(props);

        const currentTime = moment();
        const currentLocalTime = currentTime.tz(props.timezone.timeZoneId).format('h:mm A');

        this.state = {
            currentLocalTime
        };
    }

    componentDidMount() {
        this.interval = setInterval(function() {
            const currentTime = moment();
            const currentLocalTime = currentTime.tz(this.props.timezone.timeZoneId).format('h:mm A');

            this.setState({ currentLocalTime });
        }.bind(this), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { astronomy } = this.props;
        const { currentLocalTime } = this.state;

        return (
            <div className="sun-status-container">
                <div className="sun-icon-wrapper sunrise-icon">
                    <i className="wi wi-sunrise"></i>
                </div>
                <div className="sun-text-wrapper sunrise-text">
                    <span>{ getSunriseSunsetTime(astronomy.sunrise) }</span>
                </div>
                <div className="current-time">
                    { currentLocalTime }
                </div>
                <div className="sun-text-wrapper sunset-text">
                    <span>{ getSunriseSunsetTime(astronomy.sunset) }</span>
                </div>
                <div className="sun-icon-wrapper sunset-icon">
                    <i className="wi wi-sunset"></i>
                </div>
            </div>
        );
    }
};
