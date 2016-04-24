const notify = require('gulp-notify');

function ErrorHandler() {
  const args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

module.exports = ErrorHandler;