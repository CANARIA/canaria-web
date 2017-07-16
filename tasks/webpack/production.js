import webpack from 'webpack'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default {
  devtool: 'sourcemap',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin()
  ]
}
