import React from 'react';

import Nav from '../components/nav';
import ForecastCard from '../components/forecastCard';

import { removeInitialLoader } from './WeatherHomePage';

export default class ForecastPage extends React.Component {

    componentDidMount() {
        removeInitialLoader();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.weatherInfo !== this.props.weatherInfo;
    }

    onHomePageLinkClick(e) {
        e.preventDefault();

        this.props.onHomePageLinkClick();
    }

    onForecastLinkClick(e) {
        e.preventDefault();

        this.props.onForecastLinkClick();
    }

    _getListItems(items, temperatureUnit) {
        return items.map((item, index) => (
            <ForecastCard key={ `forecast${item.date}` } item={ item } index={ index } temperatureUnit={ temperatureUnit } />
        ));
    }

    _getForecastContainer(forecast, temperatureUnit) {
        return (
            <ul className="forecast-page-container">
                { this._getListItems(forecast, temperatureUnit) }
            </ul>
        );
    }

    render() {
        const {
            onChange,
            onSubmit,
            searchTerm,
            temperatureUnit,
            weatherInfo
        } = this.props;


        return (
            <div>
                <Nav
                    location={ searchTerm }
                    onChange={ onChange }
                    onSubmit={ onSubmit.bind(this, {location: searchTerm}, temperatureUnit) }
                    onHomePageLinkClick={ this.onHomePageLinkClick.bind(this) }
                    onForecastLinkClick={ this.onForecastLinkClick.bind(this) }
                />
                { this._getForecastContainer(weatherInfo.item.forecast, temperatureUnit) }
            </div>
        );
    }
}
