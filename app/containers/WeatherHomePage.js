import React from 'react';

import Nav from '../components/nav';
import CurrentStatusCard from '../components/currentStatusCard';
import SunStatusCard from '../components/SunStatusCard';
import WindStatusCard from '../components/WindStatusCard';

const _removeInitialLoader = () => {
    setTimeout(function() {
        document.getElementsByClassName('loader-wrapper')[0].remove();
    }, 500);
};

const _showLoader = () => {
    document.getElementsByClassName('loader-wrapper')[0].style.display = 'initial';
};

const _hideLoader = () => {
    document.getElementsByClassName('loader-wrapper')[0].style.display = 'none';
};

export default class WeatherHomePage extends React.PureComponent {
    componentDidMount() {
        const {
            onSubmit,
            searchTerm
        } = this.props;

        onSubmit({location: searchTerm});

        _removeInitialLoader();
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
                    searchTerm={ searchTerm }
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
                    onSubmit={ onSubmit }
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
