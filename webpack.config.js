const path = require('path');
const webpackMerge = require('webpack-merge');
const prdConfig = require('./tasks/webpack/production');
const devConfig = require('./tasks/webpack/develop');

const envConfig = process.env.NODE_ENV === 'production' ? prdConfig : devConfig;

module.exports = webpackMerge({
  entry: {
    bundle: path.resolve(__dirname, './src/js/client.js'),
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}, envConfig);
