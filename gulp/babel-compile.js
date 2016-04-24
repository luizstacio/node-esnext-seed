const gulp = require('gulp');
const babel = require('gulp-babel');
const ErrorHandler = require('./helpers/errorHandler');

function babel_compile(config) {
  return () => {
    return gulp.src(config.src)
              .pipe(babel({
                sourceMaps: true,
                plugins: ['transform-es2015-modules-commonjs']
              }))
              .on('error', ErrorHandler)
              .pipe(gulp.dest(config.out));
  }
}

module.exports = babel_compile;