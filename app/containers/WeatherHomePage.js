import React from 'react';

import Nav from '../components/nav';
import CurrentStatusCard from '../components/currentStatusCard';
import SunStatusCard from '../components/SunStatusCard';
import WindStatusCard from '../components/WindStatusCard';

const _getLoader = () => document.getElementsByClassName('loader-wrapper')[0];

export const removeInitialLoader = () => {
    setTimeout(function() {
        let loader = _getLoader();

        if (loader) {
            loader.remove();
        }
    }, 500);
};

const _showLoader = () => {
    let loader = _getLoader();

    if (loader) {
        loader.style.display = 'initial';
    }
};

const _hideLoader = () => {
    let loader = _getLoader();

    if (loader) {
        loader.style.display = 'none';
    }
};

export default class WeatherHomePage extends React.PureComponent {
    componentDidMount() {
        const {
            onSubmit,
            searchTerm,
            temperatureUnit
        } = this.props;

        onSubmit({ location: searchTerm }, temperatureUnit );
        removeInitialLoader();
    }

    componentDidUpdate() {
        const { isLoading } = this.props;

        if (isLoading) {
            _showLoader();
        } else {
            _hideLoader();
        }
    }

    onHomePageLinkClick(e) {
        e.preventDefault();

        this.props.onHomePageLinkClick();
    }

    onForecastLinkClick(e) {
        e.preventDefault();

        this.props.onForecastLinkClick();
    }

    render() {
        const {
            searchTerm,
            onChange,
            onSubmit,
            temperatureUnit,
            timezone,
            weatherInfo
        } = this.props;
        let currentStatusCard;
        let sunStatusCard;
        let windStatusCard;
        let loader;

        if (weatherInfo) {
            const {
                astronomy,
                atmosphere,
                item,
                units,
                wind
            } = weatherInfo;

            currentStatusCard = (
                <CurrentStatusCard
                    atmosphere= { atmosphere }
                    condition={ item.condition }
                    onUnitToggleChange={ onSubmit }
                    searchTerm={ searchTerm }
                    temperatureUnit={ temperatureUnit }
                />);
            sunStatusCard = (<SunStatusCard timezone={ timezone } astronomy={ astronomy } />);
            windStatusCard = (
                <WindStatusCard
                    astronomy={ astronomy }
                    timezone={ timezone }
                    units={ units }
                    wind={ wind }
                />
            );
        }

        return (
            <div>
                <Nav
                    location= { searchTerm }
                    onChange={ onChange }
                    onSubmit={ onSubmit.bind(this, {location: searchTerm}, temperatureUnit) }
                    onHomePageLinkClick={ this.onHomePageLinkClick.bind(this) }
                    onForecastLinkClick={ this.onForecastLinkClick.bind(this) }
                />
                <div className="page-container">
                    <div className="loader-wrapper"></div>
                    { loader }
                    { currentStatusCard }
                    { sunStatusCard }
                    { windStatusCard }
                </div>
            </div>
        );
    }
}
