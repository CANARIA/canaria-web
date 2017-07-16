import webpack from 'webpack'

export default {
  cache: true,
  devtool: 'inline-source-map',
  stats: {
    colors: true, // with console colors
    reasons: true, // add information about the reasons why modules are included
    timings: true, // add timing information
    hash: true, // add the hash of the compilation
    version: true, // add webpack version information
    chunks: true, // add chunk information
    chunkModules: true, // add built modules information to chunk information
    cached: true // add also information about cached (not built) modules
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}
