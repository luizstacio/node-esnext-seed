const gulp = require('gulp');
const lab = require('gulp-lab');
const ErrorHandler = require('./helpers/errorHandler');

const development = '-c -T ./test/helpers/transform.js -I __core-js_shared__';
const production = '-T test/helpers/transform.js -I __core-js_shared__ -r html -o ./coverage/coverage.html ./test';

function test_run(config) {
  return () => {
    return gulp.src(config.src)
      .pipe(lab(process.env.NODE_ENV === "development" ? production : development))
      .on('error', ErrorHandler);
  } 
}

module.exports = test_run;