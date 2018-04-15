const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: './app/index.js',
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
