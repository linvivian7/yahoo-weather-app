import React from 'react';

import LocationForm from '../components/locationForm';

export default class Page extends React.PureComponent {
    render() {
        console.log('props', this.props);

        let { onChange, onSubmit } = this.props;

        return (
            <div>
                Weather App Page
                <LocationForm onChange={ onChange } onSubmit={ onSubmit } />
            </div>
        );
    }
}
