import BrowserSync from 'browser-sync'

const browserSync = BrowserSync.create()
const reload = browserSync.reload

function start() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 7000,
    open: false
  })
}

export default { reload, start }
