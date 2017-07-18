import gulp from 'gulp'
import requireDir from 'require-dir'
import browserSync from './tasks/gulp/browsersync'
import nodemon from './tasks/gulp/nodemon'

requireDir('./tasks/gulp', { recurse: true })

gulp.task('browser-sync', browserSync.start)
gulp.task('nodemon', ['browser-sync'], nodemon(browserSync.reload))
gulp.task('dev-server', ['nodemon'])
