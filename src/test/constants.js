export const SEARCH_TERM = 'Taipei, Taiwan';

const FORECAST = [
    {
        code: '12',
        date: '21 Apr 2018',
        day: 'Sat',
        high: '86',
        low: '71'
    }, {
        code: '4',
        date: '22 Apr 2018',
        day: 'Sun',
        high: '88',
        low: '73'
    }, {
        code: '4',
        date: '23 Apr 2018',
        day: 'Mon',
        high: '88',
        low: '73'
    }, {
        code: '47',
        date: '24 Apr 2018',
        day: 'Tue',
        high: '81',
        low: '72'
    }, {
        code: '28',
        date: '25 Apr 2018',
        day: 'Wed',
        high: '74',
        low: '68'
    }, {
        code: '30',
        date: '26 Apr 2018',
        day: 'Thu',
        high: '79',
        low: '67'
    }, {
        code: '30',
        date: '27 Apr 2018',
        day: 'Fri',
        high: '82',
        low: '69'
    }, {
        code: '34',
        date: '28 Apr 2018',
        day: 'Sat',
        high: '83',
        low: '71'
    }, {
        code: '30',
        date: '29 Apr 2018',
        day: 'Sun',
        high: '84',
        low: '72'
    }, {
        code: '30',
        date: '30 Apr 2018',
        day: 'Mon',
        high: '86',
        low: '72'
    }
];

const ITEM = {
    condition: {
        code: '27',
        date: 'Fri, 20 Apr 2018 11:00 PM CST',
        temp: '75',
        text: 'Mostly Cloudy'
    },
    forecast: FORECAST,
    guid: {
        isPermaLink: 'false'
    },
    lat: '25.086',
    link: 'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2306179/',
    long: '121.560997',
    pubDate: 'Fri, 20 Apr 2018 11:00 PM CST',
    title: 'Conditions for Taipei City, Taipei City, TW at 11:00 PM CST'
};

export const WEATHER_INFO = {
    astronomy: {
        sunrise: '5:26 am',
        sunset: '6:19 pm'
    },
    atmosphere: {
        humidity: '74',
        pressure: '994.0',
        rising: '0',
        visibility: '16.1'
    },
    cityWeatherLink: 'https://weather.yahoo.com/country/state/city-2306179/',
    item: ITEM,
    link: 'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2306179/',
    location: {
        city: 'Taipei City',
        country: 'Taiwan',
        region: ' Taipei City'
    },
    units: {
        distance: 'mi',
        pressure: 'in',
        speed: 'mph',
        temperature: 'F'
    },
    wind: {
        chill: '75',
        direction: '115',
        speed: '18'
    }
};

export const TIMEZONE = {
    timeZoneId: 'America/Los_Angeles',
    timeZoneName: 'Pacific Standard Time'
};
