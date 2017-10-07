var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');
var rename = require('gulp-rename');

var devLocation = 'static/frontend';
var prodLocation = 'static/frontend-prod';

var files = {
	'scss': [
		devLocation + '/sass/app.scss'
	],
	'js': [
		devLocation + '/vendor/js/jquery-3.2.1.min.js'
	],
	'sassWatch': [
		devLocation + '/sass/**/*.*'
	]
}

gulp.task('sass', function(){
	return gulp.src(files.scss)
		.pipe(sass()) // Using gulp-sass
 		.pipe(gulp.dest(prodLocation + '/css/'))
 		.pipe(clean())
 		.pipe(rename('app.min.css'))
 		.pipe(gulp.dest(prodLocation + '/css/'));
});
 
gulp.task('js-concat', function() {
  return gulp.src(files.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(prodLocation + '/js/'))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(prodLocation + '/js/'));
});

gulp.task('watch', function(){
	gulp.watch(files.sassWatch, ['sass'])
	gulp.watch(files.js, ['js-concat'])
});