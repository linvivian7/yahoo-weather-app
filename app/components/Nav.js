import React from 'react';

import LocationForm from './LocationForm';
import './nav.scss';

const Nav = ({ onChange, onSubmit }) => (
    <nav className="nav sticky">
        <ul className="navbar">
            <li>
                <a href="#current">Current Forecast</a>
            </li>
            <li>
                <a href="#10day">10-Day Forecast</a>
            </li>
            <li className="ul__li--location-form">
                <LocationForm onChange={ onChange } onSubmit={ onSubmit } />
            </li>
        </ul>
    </nav>
);

export default Nav;
