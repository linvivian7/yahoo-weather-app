import React from 'react';

import Nav from '../components/nav';
import LocationCard from '../components/locationCard';
import ForecastCard from '../components/forecastCard';

export default class ForecastPage extends React.Component {

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

    _getListItems(items) {
        return items.map((item, index) => (
            <ForecastCard key={ `forecast${item.date}` } item={ item } index={ index } />
        ));
    }

    _getForecastContainer(forecast) {
        console.log(forecast);
        return (
            <ul className="forecast-page-container">
                { this._getListItems(forecast) }
            </ul>
        );
    }

    render() {
        const {
            onChange,
            onSubmit,
            searchTerm,
            weatherInfo
        } = this.props;
        const {
            location
        } = weatherInfo;

        return (
            <div>
                <Nav
                    searchTerm={ searchTerm }
                    onChange={ onChange }
                    onSubmit={ onSubmit }
                    onHomePageLinkClick={ this.onHomePageLinkClick.bind(this) }
                    onForecastLinkClick={ this.onForecastLinkClick.bind(this) }
                />
                <LocationCard location={ location } />
                { this._getForecastContainer(weatherInfo.item.forecast) }
            </div>
        );
    }
}
