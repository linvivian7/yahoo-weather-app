import React from 'react';
import classNames from 'classnames';

import { getDisplayDateTime } from '../../utils/dateTime';
import { getIsMetric } from '../../utils/measurement';
import { CELSIUS, FAHRENHEIT } from '../../constants';

import './currentStatusCard.scss';

const CurrentStatusCard = ({ atmosphere, condition, onUnitToggleChange, searchTerm, units }) => {
    const {
        code,
        date,
        temp
    } = condition;
    const isMetric = getIsMetric(units);
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
    const nextToggledTemperatureUnit = isMetric ? FAHRENHEIT : CELSIUS;

    return (
        <div className="current-status-container">
            <div className="weather-icon-wrapper">
                <i className={ weatherIconClasses }></i>
            </div>
            <div className="location-wrapper">
                { searchTerm }
            </div>
            <div className="date-wrapper">
                { getDisplayDateTime(date) }
            </div>
            <div className="temperature-wrapper">
                <span> { `${temp}` }<i className={ temperatureIconClasses }></i></span>
            </div>
            <div className="humidity-wrapper">
                <span> { `${atmosphere.humidity}` }<i className="wi wi-humidity"></i></span>
            </div>
            <div className="visibility-wrapper">
                <span> { Math.round(atmosphere.visibility) }<i className="fa fas fa-eye"></i></span>
            </div>
            <div className="unit-toggle-container">
                <div className="unit-toggle-switch-wrapper">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={ !isMetric }
                            className="toggle-switch"
                            onChange={ onUnitToggleChange.bind(null, searchTerm, nextToggledTemperatureUnit) }
                        />
                        <span className="toggle-slider"></span>
                    </label>
                </div>
                <div className="unit-celsius-wrapper">
                    <i className="wi wi-celsius"></i>
                </div>
                <div className="unit-fahrenheit-wrapper">
                    <i className="wi wi-fahrenheit"></i>
                </div>
            </div>
        </div>
    );
};

export default CurrentStatusCard;
