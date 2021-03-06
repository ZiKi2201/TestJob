const gulp = require('gulp'),
	  concat = require('gulp-concat'),
	  less = require('gulp-less'),
	  browserSync = require('browser-sync').create();

const scripts = require('./scripts');
const styles = require('./styles');

var devMode = false;

gulp.task('less', function() {
	gulp.src(styles)
		.pipe(less())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('css', function() {
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
	gulp.src(scripts)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('html', function() {
	return gulp.src('./src/templates/**/*.html')
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('build', function() {
	gulp.start(['less','css', 'js', 'html'])
});

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		open: false,
		server: {
			baseDir: 'dist',
		}
	});
});

gulp.task('start', function() {
	devMode = true;
	gulp.start(['build', 'browser-sync']);
	gulp.watch(['./src/less/**/*.less'], ['less']);
	gulp.watch(['./src/css/**/*.css'], ['css']);
	gulp.watch(['./src/js/**/*.js'], ['js']);
	gulp.watch(['./src/templates/**/*.html'], ['html']);
});
