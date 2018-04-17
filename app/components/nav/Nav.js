import React from 'react';

import LocationForm from '../locationForm';
import './nav.scss';

const Nav = ({ location, onChange, onSubmit, onHomePageLinkClick, onForecastLinkClick }) => (
    <nav className="nav sticky">
        <ul className="navbar">
            <li className="nav__list-item current" onClick={ onHomePageLinkClick }>
                <a href="/"> Current Forecast </a>
            </li>
            <li className="nav__list-item forecast" onClick={ onForecastLinkClick }>
                <a href="/" > 10-Day Forecast </a>
            </li>
            <li className="nav__list-item ul__li--location-form">
                <LocationForm location={ location } onChange={ onChange } onSubmit={ onSubmit } />
            </li>
        </ul>
    </nav>
);

export default Nav;
