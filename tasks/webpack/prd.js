const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const base = require('./base');

/**
 *  リリース時のwebpackの設定
 *  baseの設定を拡張している
 */
const prdConfig = {
  // custom configs on production
  devtool: 'sourcemap',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({ // compile時にuglifyでminimizeする
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
  ],
};

module.exports = webpackMerge(base, prdConfig);
