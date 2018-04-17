import React from 'react';

import Nav from '../components/nav';
import CurrentStatusCard from '../components/currentStatusCard';
import SunStatusCard from '../components/SunStatusCard';
import WindStatusCard from '../components/WindStatusCard';

export default class WeatherHomePage extends React.PureComponent {

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
            timezone,
            weatherInfo
        } = this.props;
        let currentStatusCard;
        let sunStatusCard;
        let windStatusCard;

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
                    searchTerm={ searchTerm }
                />);
            sunStatusCard = (<SunStatusCard timezone={ timezone } astronomy={ astronomy } />);
            windStatusCard = (<WindStatusCard timezone={ timezone } wind={ wind } units={ units } />);
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
