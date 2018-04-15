import React from 'react';

import LocationForm from '../components/locationForm';

export default class Page extends React.PureComponent {
    render() {
        let { onChange, onSubmit } = this.props;

        return (
            <div>
                Weather App Page
                <div>
                    <i className="sunny wi wi-day-sunny"></i>
                    <LocationForm onChange={ onChange } onSubmit={ onSubmit } />
                </div>
            </div>
        );
    }
}
