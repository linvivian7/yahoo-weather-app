import React from 'react';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import ConnectedPage from './containers/ConnectedPage';

import reducer from './reducers';
import configureStore from '../utils/configureStore';

import './sass/weather-icons.min.scss';
import './sass/weather-icons-wind.min.scss';
import './app.scss';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends React.Component {
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
                    <Route path="/" component={ ConnectedPage } />
                </Router>
            </Provider>
        );
    }
}
