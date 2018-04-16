import React from 'react';

import Nav from '../components/nav';
import CurrentStatusCard from '../components/currentStatusCard';
import SunStatusCard from '../components/SunStatusCard';
import WindStatusCard from '../components/WindStatusCard';

export default class WeatherApp extends React.PureComponent {

    componentDidMount() {
        const {
            onSubmit,
            searchTerm
        } = this.props;

        onSubmit({location: searchTerm});
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
            weatherInfo
        } = this.props;
        let currentStatusCard;
        let sunStatusCard;
        let windStatusCard;

        if (weatherInfo) {
            const {
                atmosphere,
                item,
                wind
            } = weatherInfo;

            currentStatusCard = (
                <CurrentStatusCard
                    atmosphere= { atmosphere }
                    condition={ item.condition }
                    searchTerm={ searchTerm }
                />);
            sunStatusCard = (<SunStatusCard condition={ item.condition } />);
            windStatusCard = (<WindStatusCard wind={ wind } />);
        }

        return (
            <div>
                <Nav
                    location= { searchTerm }
                    onChange={ onChange }
                    onSubmit={ onSubmit }
                    onHomePageLinkClick={ this.onHomePageLinkClick.bind(this) }
                    onForecastLinkClick={ this.onForecastLinkClick.bind(this) }
                />
                <div className="page-container">
                    { currentStatusCard }
                    { sunStatusCard }
                    { windStatusCard }
                </div>
            </div>
        );
    }
}
