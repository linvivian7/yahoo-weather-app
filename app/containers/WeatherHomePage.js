import React from 'react';

import Menu from '../components/menu';
import CurrentStatusCard from '../components/currentStatusCard';
import SunStatusCard from '../components/SunStatusCard';
import WindStatusCard from '../components/WindStatusCard';

import { hideLoader } from '../utils/loader';

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
            hideLoader();
        }
    }

    render() {
        const {
            isLoading,
            searchTerm,
            onChange,
            onSubmit,
            onHomePageLinkClick,
            onForecastLinkClick,
            onUnitToggleChange,
            temperatureUnit,
            timezone,
            weatherInfo
        } = this.props;
        let currentStatusCard;
        let sunStatusCard;
        let windStatusCard;
        let loader;

        if (isLoading) {
            loader = (<div className="loader-wrapper"></div>);
        }

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
                    onUnitToggleChange={ onUnitToggleChange }
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
                    { loader }
                    { currentStatusCard }
                    { sunStatusCard }
                    { windStatusCard }
                </div>
            </div>
        );
    }
}
