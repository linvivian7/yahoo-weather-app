import React from 'react';

import Menu from '../components/menu';
import ForecastCard from '../components/forecastCard';

import { removeInitialLoader } from './WeatherHomePage';

export default class ForecastPage extends React.Component {

    componentDidMount() {
        removeInitialLoader();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.weatherInfo !== this.props.weatherInfo;
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
            onHomePageLinkClick,
            onForecastLinkClick,
            searchTerm,
            temperatureUnit,
            weatherInfo
        } = this.props;


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
                { this._getForecastContainer(weatherInfo.item.forecast, temperatureUnit) }
            </div>
        );
    }
}
