import React from 'react';

import Nav from '../components/Nav';

export default class Page extends React.PureComponent {

    _getLocationCard() {
        const { weatherInfo: {
            item,
            location
        }} = this.props;
        const { condition } = item;

        return (
            <div className="location-name-container">
                <div className="location-name">
                    { `${location.city}, ${location.country}` }
                </div>
                <div className="location-name">
                    { `${condition.date}` }
                </div>
            </div>
        );
    }

    _getCurrentStatsCard() {
        const { weatherInfo: {
            item
        }} = this.props;
        const { condition } = item;

        return (
            <div className="card current-status-container">
                <div className="half-inner-card temperature">
                    { `${condition.temp}` } <i className="wi wi-celsius"></i>
                </div>
                <div className="half-inner-card weather-icon">
                    <i className="wi wi-yahoo-32"></i>
                </div>
            </div>
        );
    }

    render() {
        let {
            onChange,
            onSubmit,
            weatherInfo
        } = this.props;
        let locationCard;
        let currentStatusCard;

        if (weatherInfo) {
            locationCard = this._getLocationCard();
            currentStatusCard = this._getCurrentStatsCard();
        }

        return (
            <div>
                <Nav onChange={ onChange } onSubmit={ onSubmit } />
                <div className="page-container">
                    { locationCard }
                    { currentStatusCard }
                </div>
            </div>
        );
    }
}
