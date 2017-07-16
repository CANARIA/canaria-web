const postcssImport = require('postcss-import')
const postcssSorting = require('postcss-sorting')
const csswring = require('csswring')

module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [postcssImport(), postcssSorting(), csswring()]
})
