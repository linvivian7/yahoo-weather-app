const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const babelPolyfill = require('babel-polyfill');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
    output: {
        path: path.join(__dirname, '/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new Dotenv({
          systemvars: true,
          silent: true
        })
    ],
    module:  {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
               test: /\.json$/,
               loader: 'json-loader'
             }
        ]
    }
};
