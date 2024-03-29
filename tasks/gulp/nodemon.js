import nodemon from 'gulp-nodemon'

let initialized = false

export default function server(reload) {
  return callback => {
    const stream = nodemon({
      script: 'src/js/server.js',
      exec: 'babel-node',
      watch: ['public/*', 'src/js/server.js'],
      ext: 'css js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      stdout: false
    })

    return stream
      .on('start', () => {
        if (!initialized) {
          initialized = true
          callback()
        }
      })
      .on('readable', function onReadable() {
        this.stdout.on('data', chunk => {
          if (/Express server is running at/.test(chunk)) {
            reload()
          }

          process.stdout.write(chunk)
        })

        this.stderr.on('data', chunk => {
          process.stderr.write(chunk)
        })
      })
  }
}
