import React from 'react';

import LocationForm from '../components/locationForm';

export default class Page extends React.PureComponent {
    render() {
        let { onChange, onSubmit } = this.props;

        return (
            <div>
                Weather App Page
                <LocationForm onChange={ onChange } onSubmit={ onSubmit } />
            </div>
        );
    }
}
