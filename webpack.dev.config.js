const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const babelPolyfill = require('babel-polyfill');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    optimization: {
      minimize: false
    },
    entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerHost: '0.0.0.0',
            analyzerPort: 3000
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new Dotenv({
            systemvars: true,
            silent: true
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.EnvironmentPlugin({
            NODE_ENV: JSON.stringify('development'),
            REACT_APP_TARGET: JSON.stringify('web')
        })
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
