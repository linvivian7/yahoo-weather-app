export const getQueryUrl = (location) => {
    const yahooWeatherUrl = 'https://query.yahooapis.com/v1/public/yql';

    let query  = `select * from weather.forecast
                  where woeid in (select woeid from geo.places(1)
                  where text='${location}') and u='c'`;

    return `${yahooWeatherUrl}?q=${query}&format=json&env=store://datatables.org/alltableswithkeys&co&`;
};

export const parseQueryResponse = ({ query: { results }}) => {
    let {
        atmosphere,
        item,
        wind
    } = results.channel;

    return {
        atmosphere,
        item,
        wind
    };
};
