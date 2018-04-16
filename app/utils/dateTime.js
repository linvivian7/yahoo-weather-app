export const getWeatherDateTime = (date) => {
    const [dayOfWeek, dateTime] = date.split(',');
    const splitDateTime = dateTime.split(' ');
    const day = splitDateTime[1];
    const month = splitDateTime[2];
    const year = splitDateTime[3];

    return {
        dayOfWeek,
        day,
        month,
        year
    };
};
