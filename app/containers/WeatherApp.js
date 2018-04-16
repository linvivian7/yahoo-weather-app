import React from 'react';

import Nav from '../components/nav';
import LocationCard from '../components/locationCard';
import CurrentStatusCard from '../components/currentStatusCard';
import LastUpdatedCard from '../components/LastUpdatedCard';
import SunStatusCard from '../components/SunStatusCard';
import WindStatusCard from '../components/WindStatusCard';

export default class WeatherApp extends React.PureComponent {

    componentDidMount() {
        const {
            onSubmit,
            location
        } = this.props;

        onSubmit({location});
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
            onChange,
            onSubmit,
            weatherInfo
        } = this.props;
        let locationCard;
        let currentStatusCard;
        let lastUpdatedCard;
        let sunStatusCard;
        let windStatusCard;

        if (weatherInfo) {
            const {
                item,
                location,
                wind
            } = weatherInfo;

            locationCard = (<LocationCard location={ location } />);
            currentStatusCard = (<CurrentStatusCard condition={ item.condition } />);
            lastUpdatedCard = (<LastUpdatedCard condition={ item.condition } />);
            sunStatusCard = (<SunStatusCard condition={ item.condition } />);
            windStatusCard = (<WindStatusCard wind={ wind } />);
        }

        return (
            <div>
                <Nav
                    onChange={ onChange }
                    onSubmit={ onSubmit }
                    onHomePageLinkClick={ this.onHomePageLinkClick.bind(this) }
                    onForecastLinkClick={ this.onForecastLinkClick.bind(this) }
                />
                <div className="page-container">
                    { locationCard }
                    { currentStatusCard }
                    { lastUpdatedCard }
                    { sunStatusCard }
                    { windStatusCard }
                </div>
            </div>
        );
    }
}
