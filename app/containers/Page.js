import React from 'react';
import axios from 'axios';

import {getQueryUrl} from '../utils/queryUrl';

const _parseQueryResponse = ({data: {query: {results}}}) => {
    let {
        atmosphere,
        item,
        wind
    } = results.channel;

    return {
        atmosphere,
        item,
        wind
    };
};

export default class Page extends React.PureComponent {
    state = {
        search: 'chicago, il',
        item: {},
        wind: {},
        atmosphere: {}
    }

    componentDidMount() {
        this._getWeatherData();
    }

    async _getWeatherData() {
        try {
            const response = await axios.get(getQueryUrl(this.state.search));

            this.setState(_parseQueryResponse(response));
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                Weather App Page
            </div>
        );
    }
}
