const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssSorting = require('postcss-sorting');
const csswring = require('csswring');

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    postcssImport(),
    postcssCustomProperties(),
    autoprefixer({
      browsers: [
        "ie >= 11",
        "last 2 Edge versions",
        "last 2 Firefox versions",
        "last 2 Chrome versions",
        "last 2 Safari versions",
        "last 2 Opera versions",
        "last 2 iOS versions",
        "last 2 ChromeAndroid versions"
      ]
    }),
    postcssFlexbugsFixes(),
    postcssSorting(),
    csswring()
  ]
});
