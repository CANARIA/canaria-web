const path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader', 'angular2-template-loader'], exclude: /node_modules/ },
      { test: /\.component\.html$/, loader: ['raw-loader'] },
      { test: /\.component\.css$/, loader: ['raw-loader'] }
    ]
  },
  entry: {
    'bundle': path.resolve(__dirname, './built/main.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  }
};
