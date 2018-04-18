export const getWeatherUrl = (location, unit = 'c') => {
    const yahooWeatherUrl = 'https://query.yahooapis.com/v1/public/yql';

    let query  = `select * from weather.forecast
                  where woeid in (select woeid from geo.places(1)
                  where text='${location}') and u='${unit}'`;

    return `${yahooWeatherUrl}?q=${query}&format=json&env=store://datatables.org/alltableswithkeys&co&`;
};

export const getTimezoneUrl = (latitude, longitude) => (
    `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=1331161200&sensor=false&key=${process.env.GOOGLE_API_KEY}`
);

export const parseQueryResponse = ({query: { results }}) => {
    let {
        astronomy,
        atmosphere,
        item,
        location,
        units,
        wind
    } = results.channel;

    return {
        astronomy,
        atmosphere,
        item,
        units,
        location,
        wind
    };
};
