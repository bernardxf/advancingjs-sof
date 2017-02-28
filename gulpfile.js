const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const copy = require('gulp-contrib-copy');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');

let destino = 'test/';

gulp.task('pug', function () {
	return gulp.src('dev/pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest(destino));
});

gulp.task('stylus', function () {
	return gulp.src('dev/stylus/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest(destino+'style/'));
});

gulp.task('copyJS', function() {
	return gulp.src('dev/js/**/*')
		.pipe(copy())
		.pipe(gulp.dest(destino+'js/'));
});

gulp.task('copyCSS', function() {
	return gulp.src('dev/stylus/*.css')
		.pipe(copy())
		.pipe(gulp.dest(destino+'style/'));
});

gulp.task('imagemin', function(){
    gulp.src('dev/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(destino+'images/'))
});

gulp.task('watch', function() {
	gulp.watch('dev/stylus/**/*.styl', ['stylus']);
	gulp.watch('dev/pug/*.pug', ['pug']);
	gulp.watch('dev/js/*.js', ['copyJS']);
	gulp.watch('dev/images/**', ['imagemin']);
});

gulp.task('images',['imagemin'], function() {});
gulp.task('test',['pug','stylus','copyJS','copyCSS','watch'], function() {});