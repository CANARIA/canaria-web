const nodemon = require('gulp-nodemon');

let initialized = false;

function server(reload) {
  return (callback) => {
    const stream = nodemon({
      script: 'src/js/server.js',
      exec: 'babel-node',
      watch: ['dist/*', 'src/js/server.js'],
      ext: 'css js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
    });

    return stream
      .on('start', () => {
        if (!initialized) {
          initialized = true;
          callback();
        }
      })
      // ここで時間をあけないと上手くreloadされない
      .on('restart', () => setTimeout(reload, 1000));
  };
}

module.exports = server;
