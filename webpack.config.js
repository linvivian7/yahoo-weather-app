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
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    }
};
