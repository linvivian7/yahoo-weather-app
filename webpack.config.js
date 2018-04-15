const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const babelPolyfill = require('babel-polyfill');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new Dotenv()
    ],
    module:  {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
