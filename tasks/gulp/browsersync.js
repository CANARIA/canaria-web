const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

function start() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 7000,
    open: false,
  });
}

module.exports = { reload, start };
