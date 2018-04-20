import React from 'react';
import ForecastPage from './ForecastPage';

import * as constants from '../../test/constants';

test('ForecastPage snapshot', () => {
    const wrapper = shallow(
        <ForecastPage
            searchTerm={ constants.SEARCH_TERM }
            weatherInfo={ constants.WEATHER_INFO }
        />
    );

    expect(wrapper).toMatchSnapshot();
});
