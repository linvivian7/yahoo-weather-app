/* eslint-disable import/unambiguous */
module.exports = (
    process.env.NODE_ENV === 'development'
        ? require('./configureStore.debug')
        : require('./configureStore.main')
);
