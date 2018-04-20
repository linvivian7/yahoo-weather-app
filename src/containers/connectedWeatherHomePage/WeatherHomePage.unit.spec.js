import React from 'react';
import WeatherHomePage from './WeatherHomePage';

import * as constants from '../../test/constants';

test('WeatherHomePage snapshot', () => {
    const wrapper = shallow(
        <WeatherHomePage
            searchTerm={ constants.SEARCH_TERM }
            weatherInfo={ constants.WEATHER_INFO }
            timezone={ constants.TIMEZONE }
            isLoading={ false }
        />
    );

    expect(wrapper).toMatchSnapshot();
});
