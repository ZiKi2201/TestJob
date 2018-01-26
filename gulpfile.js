var gulp = require('gulp');
var less = require('gulp-less'),
	rename = require("gulp-rename"),
	plumber = require('gulp-plumber'),
	connect = require('gulp-connect');


gulp.task('connect', function() {
	connect.server({
		port: 8888,
		root: 'dev/',
		livereload: true
	});
});

gulp.task('compile_less', function () {
	return gulp.src('dev/less/*.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(rename({
			dirname: "",
			basename: "build",
			extname: ".css"
		}))
		.pipe(gulp.dest('public/css/'))
		.pipe(connect.reload());
});

gulp.task('move_js', [], function() {
	return gulp.src('dev/js/*.js')
		.pipe(gulp.dest('public/js/'))
		.pipe(connect.reload());
}); 

gulp.task('move_json', [], function() {
	return gulp.src('./src/*.json')
		.pipe(gulp.dest('./public/'))
		.pipe(connect.reload());
});

gulp.task('html', function() {
	return gulp.src('dev/*.html')
	.pipe(gulp.dest('public/'))
})


gulp.task('watch', function() {
	gulp.watch('dev/less/**/*.less', ['compile_less'])
	gulp.watch('dev/js/**/*.js', ['move_js'])
	gulp.watch('dev/js/**/*.json', ['move_json'])
	gulp.watch('dev/*.html', ['html'])
});


gulp.task('default', ['connect', 'move_json', 'compile_less', 'move_js', 'html', 'watch']);
