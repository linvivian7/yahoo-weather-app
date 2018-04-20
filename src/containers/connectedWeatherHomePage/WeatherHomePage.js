import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Menu from '../../components/menu';
import CurrentStatusCard from '../../components/currentStatusCard';
import SunStatusCard from '../../components/sunStatusCard';
import WindStatusCard from '../../components/windStatusCard';
import { GITHUB_LINK, YAHOO_WEATHER_LINK } from '../../constants';

import './weatherHomePage.scss';

export default class WeatherHomePage extends React.PureComponent {
    constructor(props) {
        super(props);

        const isLoading = props.weatherInfo ? false : true;

        this.state = { isLoading };
    }

    componentDidMount() {
        const {
            onSubmit,
            searchTerm,
            weatherInfo
        } = this.props;

        if (!weatherInfo) {
            onSubmit({ location: searchTerm });
        }
    }

    componentWillReceiveProps({ isLoading }) {
        this.setState({ isLoading });
    }

    render() {
        const {
            searchTerm,
            onChange,
            onSubmit,
            onHomePageLinkClick,
            onForecastLinkClick,
            onUnitToggleChange,
            timezone,
            weatherInfo
        } = this.props;
        let { isLoading } = this.state;
        let currentStatusCard;
        let sunStatusCard;
        let windStatusCard;

        if (weatherInfo) {
            const {
                astronomy,
                atmosphere,
                item,
                cityWeatherLink,
                units,
                wind
            } = weatherInfo;

            currentStatusCard = (
                <CurrentStatusCard
                    atmosphere={ atmosphere }
                    cityWeatherLink={ cityWeatherLink }
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
                    onChange={ onChange }
                    onSubmit={ onSubmit }
                    onHomePageLinkClick={ onHomePageLinkClick }
                    onForecastLinkClick={ onForecastLinkClick }
                />
                <div className="page-container">
                    <ReactCSSTransitionGroup
                        transitionName="loader"
                        transitionEnterTimeout={ 1 }
                        transitionLeaveTimeout={ 1000 }
                    >
                      { isLoading ? <div className="loader-wrapper"></div> : null}
                    </ReactCSSTransitionGroup>
                    { currentStatusCard }
                    { sunStatusCard }
                    { windStatusCard }
                    <div className="external-link-container">
                        <a aria-label="Github link" className="github-link" href={ GITHUB_LINK } target="_blank">
                            <span className="icon-github" aria-hidden="true"></span>
                        </a>
                        <a aria-label="Yahoo weather link"  href={ YAHOO_WEATHER_LINK } target="_blank">
                            <img src={ require('../../assets/img/yahoo-weather.gif') } alt="Yahoo Weather Logo" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
