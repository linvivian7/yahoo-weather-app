import { getCountryCode } from './country';

export const shouldFetchNewQuery = (searchTerm, lastUpdatedTime, temperatureUnit, weatherResults) => (
    (searchTerm !== getSearchTerm(weatherResults)) ||
    (lastUpdatedTime !== weatherResults.item.pubDate) ||
    (temperatureUnit !== weatherResults.units.temperature)
);

export const getWeatherUrl = (location, unit = 'c') => {
    const yahooWeatherUrl = 'https://query.yahooapis.com/v1/public/yql';

    let query  = `select * from weather.forecast
                  where woeid in (select woeid from geo.places(1)
                  where text='${location}') and u='${unit.toLowerCase()}'`;

    return `${yahooWeatherUrl}?q=${query}&format=json&env=store://datatables.org/alltableswithkeys&co&`;
};

export const getTimezoneUrl = (latitude, longitude) => (
    `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=1331161200&sensor=false&key=${process.env.GOOGLE_API_KEY}`
);

export const parseQueryResponse = ({query: { results }}) => {
    const {
        astronomy,
        atmosphere,
        item,
        link,
        location,
        units,
        wind
    } = results.channel;
    const cityWeatherLink = link.split('*')[1];

    return {
        astronomy,
        atmosphere,
        cityWeatherLink,
        item,
        link,
        units,
        location,
        wind
    };
};

export const getSearchTerm = (weatherResults) => {
    const { location } = weatherResults;
    const countryCode = getCountryCode(location.country);

    let searchTerm = location.city;

    if (countryCode) {
        searchTerm = `${location.city}, ${countryCode}`;
    }

    return searchTerm;
};
