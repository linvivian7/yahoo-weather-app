import React from 'react';

import Menu from '../components/menu';
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
            temperatureUnit,
            weatherInfo
        } = this.props;

        if (!weatherInfo) {
            onSubmit({ location: searchTerm }, temperatureUnit );
            removeInitialLoader();
        }
    }

    componentDidUpdate() {
        const { isLoading } = this.props;

        if (isLoading) {
            _showLoader();
        } else {
            _hideLoader();
        }
    }

    render() {
        const {
            searchTerm,
            onChange,
            onSubmit,
            onHomePageLinkClick,
            onForecastLinkClick,
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
            console.log('units passed in homepage', units.temperature);
            currentStatusCard = (
                <CurrentStatusCard
                    atmosphere= { atmosphere }
                    condition={ item.condition }
                    onUnitToggleChange={ onSubmit }
                    searchTerm={ searchTerm }
                    units={ units }
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
                <Menu
                    searchTerm={ searchTerm }
                    onChange= { onChange }
                    onSubmit= { onSubmit }
                    temperatureUnit={ temperatureUnit }
                    onHomePageLinkClick={ onHomePageLinkClick }
                    onForecastLinkClick={ onForecastLinkClick }
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
