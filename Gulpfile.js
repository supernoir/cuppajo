var gulp = require('gulp');
var connect = require('gulp-connect');

// Server
gulp.task('webserver', function() {
  connect.server();
});


gulp.task('default', ['webserver']);
