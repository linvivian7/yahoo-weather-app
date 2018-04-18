import React from 'react';
import Nav from './_nav';

const _onHomePageLinkClick = (onHomePageLinkClick, e) => {
    e.preventDefault();

    onHomePageLinkClick();
};

const _onForecastLinkClick = (onForecastLinkClick, e) => {
    e.preventDefault();

    onForecastLinkClick();
};

const Menu = ({ searchTerm, onChange, onSubmit, onHomePageLinkClick, onForecastLinkClick, temperatureUnit }) => (
    <Nav
        location={ searchTerm }
        onChange={ onChange }
        onSubmit={ onSubmit.bind(this, {location: searchTerm}, temperatureUnit) }
        onHomePageLinkClick={ _onHomePageLinkClick.bind(null, onHomePageLinkClick) }
        onForecastLinkClick={ _onForecastLinkClick.bind(null, onForecastLinkClick) }
    />
);

export default Menu;
