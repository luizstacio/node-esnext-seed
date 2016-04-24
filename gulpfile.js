const gulp = require('gulp');

const envConfig = process.env.CONFIG || 'development';
const filename = envConfig + '.json';

console.log('[ENVORNOMENT]: '+ envConfig);

const PATH = {
  js: {
    src: './src/**/*.js',
    out: '.production'
  },
  test: {
    src: './test/**/*.test.js'
  },
  server: {
    script: './.production/index.js'
  }
};

// Bebel ES6 -> ES5
gulp.task('babel:compile', require('./gulp/babel-compile')(PATH.js));
gulp.task('babel:watch', ['babel:compile'], () => {
  gulp.watch(PATH.js.src, ['babel:compile']);
});

// Run tests
gulp.task('test:run', require('./gulp/test-run')(PATH.test));
gulp.task('test:watch', () => {
  gulp.watch([PATH.js.src, PATH.test.src], ['test:run']);
});

const serverRunTasks = ['babel:compile'];
gulp.task('server:run', serverRunTasks, require('./gulp/server-run')(PATH.server, serverRunTasks));

gulp.task('build', ['babel:compile', 'test:run']);
gulp.task('default', ['build']);