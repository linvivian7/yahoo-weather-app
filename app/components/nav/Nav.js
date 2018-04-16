import React from 'react';

import LocationForm from '../locationForm';
import './nav.scss';

const Nav = ({ searchTerm, onChange, onSubmit, onHomePageLinkClick, onForecastLinkClick }) => (
    <nav className="nav sticky">
        <ul className="navbar">
            <li>
                <a href="/" onClick={ onHomePageLinkClick }>Current Forecast</a>
            </li>
            <li>
                <a href="/" onClick={ onForecastLinkClick }>10-Day Forecast</a>
            </li>
            <li className="ul__li--location-form">
                <LocationForm searchTerm={ searchTerm } onChange={ onChange } onSubmit={ onSubmit } />
            </li>
        </ul>
    </nav>
);

export default Nav;
