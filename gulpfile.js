const gulp = require('gulp');
const requireDir = require('require-dir');
const nodemon = require('./tasks/gulp/nodemon');
const browserSync = require('./tasks/gulp/browsersync');

requireDir('./tasks/gulp', { recurse: true });

// nodemonでサーバー起動
gulp.task('nodemon', nodemon(browserSync.reload));

// browser-syncでブラウザ起動
gulp.task('browser-sync', ['nodemon'], browserSync.start);

// ライブリロードサーバー起動
gulp.task('dev-server', ['browser-sync']);
