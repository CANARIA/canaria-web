const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/ },
    ]
  },
  entry: {
    'bundle': path.resolve(__dirname, './built/main_aot.js'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ],
  devtool: 'sourcemap',
};
