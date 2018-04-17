import React from 'react';

import { Provider } from 'react-redux';
import { Route, Router, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import ConnectedWeatherHomePage from './containers/ConnectedWeatherHomePage';
import ConnectedForecastPage from './containers/ConnectedForecastPage';

import { BASE_URL, FORECAST_URL } from './constants';
import reducer from './reducers';
import configureStore from '../utils/configureStore';

import './sass/weather-icons.min.scss';
import './sass/weather-icons-wind.min.scss';
import './app.scss';
import 'font-awesome/css/font-awesome.min.css';

export default class WeatherHomePage extends React.Component {
    constructor(props) {
        super(props);

        let historyManagement = createMemoryHistory();

        // creates a store w/ Redux logging defaulted in development environment
        // also adds `redux-thunk` middleware by default for async actions
        this._store = configureStore({
            reducer,
            middleware: [thunk, routerMiddleware(historyManagement)]
        });

        // make the store the source of truth for the current route we're on
        this._history = syncHistoryWithStore(historyManagement, this._store);
    }

    render() {
        return (
            <Provider store={ this._store }>
                <Router history={ this._history }>
                    <Route exact path={ BASE_URL } component={ ConnectedWeatherHomePage } />
                    <Route path={ FORECAST_URL } component={ ConnectedForecastPage } />
                </Router>
            </Provider>
        );
    }
}
