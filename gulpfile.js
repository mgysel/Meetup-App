'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// Autoprefixes different styles for different browsers.
var autoprefixer = require('gulp-autoprefixer');
// To allow live editing.
var browserSync = require('browser-sync').create();
// Minify and Concat files
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('./index.html').on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		// Specifies autoprefixing for last 2 versions of each browser.
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

//script paths
var jsFiles = 'js/*.js',
    jsDest = 'js/dest';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});