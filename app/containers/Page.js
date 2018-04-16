import React from 'react';

import Nav from '../components/nav';
import LocationCard from '../components/locationCard';
import CurrentStatusCard from '../components/currentStatusCard';
import LastUpdatedCard from '../components/LastUpdatedCard';

export default class Page extends React.PureComponent {

    _getLastUpdatedCard() {
        const { weatherInfo: {
            item
        }} = this.props;
        const { condition } = item;

        return (
            <div className="last-updated-container">
                { `Last updated: ${condition.date}` }
            </div>
        );
    }

    render() {
        let {
            onChange,
            onSubmit,
            weatherInfo
        } = this.props;
        let locationCard;
        let currentStatusCard;
        let lastUpdatedCard;
        let sunStatusCard;

        if (weatherInfo) {
            let {
                item,
                location
            } = weatherInfo;

            locationCard = (<LocationCard location={ location } />);
            currentStatusCard = (<CurrentStatusCard condition={ item.condition } />);
            lastUpdatedCard = (<LastUpdatedCard condition={ item.condition } />);
        }

        return (
            <div>
                <Nav onChange={ onChange } onSubmit={ onSubmit } />
                <div className="page-container">
                    { locationCard }
                    { currentStatusCard }
                    { lastUpdatedCard }
                    { sunStatusCard }
                </div>
            </div>
        );
    }
}
