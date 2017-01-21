const gulp = require('gulp');
const requireDir = require('require-dir');
const copy = require('./gulp/copy');
const postcss = require('./gulp/postcss');

requireDir('./gulp', { recurse: true });

// HTMLのコピー
gulp.task('copy:html', copy.html('built'));
gulp.task('copy:html:aot', copy.html('src_aot'));

// CSSのコンパイル
gulp.task('postcss', postcss('built'));
gulp.task('postcss:aot', postcss('src_aot'));

// TypeScriptのコピー
gulp.task('copy:ts:aot', copy.ts('src_aot'));

// HTML, CSSの監視
gulp.task('watch:assets', () => {
  gulp.watch('src/**/*.component.html', ['copy:html']);
  gulp.watch('src/**/*.component.css', ['postcss']);
});
