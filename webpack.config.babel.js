import path from 'path'
import webpackMerge from 'webpack-merge'
import prdConfig from './tasks/webpack/production'
import devConfig from './tasks/webpack/develop'

const envConfig = process.env.NODE_ENV === 'production' ? prdConfig : devConfig

export default webpackMerge(
  {
    entry: {
      bundle: path.resolve(__dirname, './src/js/client.js')
    },
    output: {
      path: path.join(__dirname, './public'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  envConfig
)
