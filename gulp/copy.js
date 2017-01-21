const gulp = require('gulp');

function html(dist) {
  return () => gulp.src(
    ['src/**/*.component.html'],
    { base: 'src' }
  )
  .pipe(gulp.dest(dist));
}

function ts(dist) {
  return () => gulp.src(
    ['src/**/*.ts', '!src/main.ts'],
    { base: 'src' }
  )
  .pipe(gulp.dest(dist));
}

module.exports = { html, ts };
