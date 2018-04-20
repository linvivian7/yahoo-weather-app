const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const babelPolyfill = require('babel-polyfill');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    optimization: {
      minimize: true
    },
    entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new Dotenv({
            systemvars: true,
            silent: true
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: JSON.stringify('production'),
            REACT_APP_TARGET: JSON.stringify('web')
        }),
        new webpack.optimize.SplitChunksPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader'
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }, {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            }
        ]
    }
};
