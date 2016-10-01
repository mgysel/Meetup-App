'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// Autoprefixes different styles for different browsers.
var autoprefixer = require('gulp-autoprefixer');
// To allow live editing.
var browserSync = require('browser-sync').create();
// Minify and Concat js files
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var mergeStream = require('merge-stream');

gulp.task('default', ['copy', 'sass', 'css', 'lint', 'scripts'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/css/**/*.css', ['css']);
	gulp.watch('src/js/**/*.js', ['scripts','lint']);
	gulp.watch('src/*.html', ['copy']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);

	browserSync.init({
		server: 'dist'
	});
});

// copy over index, images, data, and serviceworker.
gulp.task('copy', function() {
	return mergeStream(
    	gulp.src('src/*.html').pipe(gulp.dest('dist')),
    	gulp.src('src/img/*').pipe(gulp.dest('dist/img'))
  	);
});

gulp.task('sass', function() {
	gulp.src('src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		// Specifies autoprefixing for last 2 versions of each browser.
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

// Concat and minify css
gulp.task('css', function () {
	gulp.src(['src/css/bootstrap.css', 'src/css/index-style.css', 'src/css/index-media.css'])
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('index.css'))
		.pipe(gulp.dest('dist/css'));
	gulp.src(['src/css/bootstrap.css', 'src/css/home-page-style.css', 'src/css/home-page-media.css'])
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('home-page.css'))
		.pipe(gulp.dest('dist/css'));
	gulp.src(['src/css/bootstrap.css', 'src/css/start-meetup.css', 'src/css/start-meetup-media.css'])
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('start-meetup.css'))
		.pipe(gulp.dest('dist/css'));
});

//script paths
var jsFiles = 'src/js/*.js',
    jsDest = 'dist/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('lint', function () {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});