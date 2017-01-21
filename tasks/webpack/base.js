const path = require('path');

/**
 *  ベースとなるwebpackの設定
 *  環境関係なく使用される
 */
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../../src/client.js'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
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
};
