var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var	autoprefixer = require('gulp-autoprefixer');
var	notify = require('gulp-notify')

// Server
gulp.task('webserver', function() {
  connect.server();
});

gulp.task('styles', function() {
  return gulp.src('sass/*.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('css'))
	.pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('default', ['webserver','styles']);
