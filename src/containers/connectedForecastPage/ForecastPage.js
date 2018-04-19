import React from 'react';

import Menu from '../../components/menu';
import ForecastCard from '../../components/forecastCard';
import { getIsMetric } from '../../utils/measurement';

import './forecastPage.scss';

export default class ForecastPage extends React.PureComponent {

    _getListItems(items, isMetric) {
        return items.map((item, index) => (
            <ForecastCard key={ `forecast${item.date}` } item={ item } index={ index } isMetric={ isMetric } />
        ));
    }

    _getForecastContainer(forecast, isMetric) {
        return (
            <ul className="forecast-page-container">
                { this._getListItems(forecast, isMetric) }
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
            weatherInfo
        } = this.props;
        const isMetric = getIsMetric(weatherInfo.units);

        return (
            <div>
                <Menu
                    searchTerm={ searchTerm }
                    onChange= { onChange }
                    onSubmit= { onSubmit }
                    onHomePageLinkClick={ onHomePageLinkClick }
                    onForecastLinkClick={ onForecastLinkClick }
                />
                { this._getForecastContainer(weatherInfo.item.forecast, isMetric) }
            </div>
        );
    }
}
