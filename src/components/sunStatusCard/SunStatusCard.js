import React from 'react';
import moment from 'moment-timezone';

import { getSunriseSunsetTime } from '../../utils/dateTime';
import './sunStatusCard.scss';

class SunStatusCard extends React.PureComponent {

    constructor(props) {
        super(props);

        const currentTime = moment();
        const { timeZoneId } = props.timezone;
        let currentLocalTime = '';

        currentLocalTime = currentTime.tz(timeZoneId).format('h:mm A');

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
                <div className="sunrise-icon-wrapper">
                    <i className="wi wi-sunrise"></i>
                </div>
                <div className="sunrise-text-wrapper">
                    <span>{ getSunriseSunsetTime(astronomy.sunrise) }</span>
                </div>
                <div className="current-time-wrapper">
                    { currentLocalTime }
                </div>
                <div className="sunset-text-wrapper">
                    <span>{ getSunriseSunsetTime(astronomy.sunset) }</span>
                </div>
                <div className="sunset-icon-wrapper">
                    <i className="wi wi-sunset"></i>
                </div>
            </div>
        );
    }
};

export default SunStatusCard;
