const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

module.exports = dist => () => gulp.src(
    ['src/**/*.component.css'],
    { base: 'src' }
  )
  .pipe(postcss([
    autoprefixer({
      browsers: ["last 2 versions", "safari >= 7"]
    })
  ]))
  .pipe(gulp.dest(dist));
