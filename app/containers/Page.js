import React from 'react';

import Nav from '../components/Nav';

export default class Page extends React.PureComponent {

    _getLocationCard() {
        const { weatherInfo: {
            location
        }} = this.props;

        return (
            <div className="location-name-container">
                <span className="location-name">
                    { `${location.city}, ${location.country}` }
                </span>
            </div>
        );
    }

    _getCurrentStatsCard() {
        const { weatherInfo: {
            item
        }} = this.props;
        const { condition } = item;

        return (
            <div className="current-status-container">
                <span className="temperature">
                    { `${condition.temp}` }
                </span>
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
                    Weather App Page

                    { locationCard }
                    { currentStatusCard }

                </div>
            </div>
        );
    }
}
