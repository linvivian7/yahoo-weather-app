const path = require('path')
const webpack = require('webpack')
const babelPolyfill = require('babel-polyfill');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module:  {
      loaders: [
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel'
          },
          {
              test: /\.(scss|css)$/,
              loaders: ['style', 'css', 'sass']
          },
          {
              test: /\.(png|jpg|svg|gif)$/,
              loader: 'file-loader'
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
              loader: 'file?name=public/fonts/[name].[ext]'
          },
          {
             test: /\.json$/,
             loader: 'json-loader'
           }
      ]
  }
};
