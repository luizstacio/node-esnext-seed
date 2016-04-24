const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

function serverRun (config, tasks) {
  return () => {
    return nodemon({
      script: config.script,
      ext: 'js',
      tasks: tasks
    })
    .on('restart', function () {
      console.log(`[${new Date().toJSON()}] restarted!`);
    });
  }
}

module.exports = serverRun;