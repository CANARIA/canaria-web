const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('./tasks/gulp/browsersync');
const nodemon = require('./tasks/gulp/nodemon');

requireDir('./tasks/gulp', { recurse: true });

// browser-syncでブラウザ起動
gulp.task('browser-sync', browserSync.start);

// nodemonでサーバー起動
gulp.task('nodemon', ['browser-sync'], nodemon(browserSync.reload));

// ライブリロードサーバー起動
gulp.task('dev-server', ['nodemon']);
