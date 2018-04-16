import React from 'react';

import LocationForm from '../locationForm';
import './nav.scss';

const Nav = ({ onChange, onSubmit, onHomePageLinkClick, onForecastLinkClick }) => (
    <nav className="nav sticky">
        <ul className="navbar">
            <li>
                <a href="/" onClick={ onHomePageLinkClick }>Current Forecast</a>
            </li>
            <li>
                <a href="/" onClick={ onForecastLinkClick }>10-Day Forecast</a>
            </li>
            <li className="ul__li--location-form">
                <LocationForm onChange={ onChange } onSubmit={ onSubmit } />
            </li>
        </ul>
    </nav>
);

export default Nav;
