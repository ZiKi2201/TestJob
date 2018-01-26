var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),    
    concat = require('gulp-concat');

gulp.task('connect', function() {
    connect.server({
        port: 8888,
        root: './prod/',
        livereload: true
    });
});

gulp.task('less', function(){
   return gulp.src('./src/less/**/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./prod/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function(){
    return gulp.src('./src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./prod/js'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./prod'))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch('./src/less/**/*.less', ['less'])
    gulp.watch('./src/js/**/*.js', ['scripts'])
    gulp.watch('./src/**/*.html', ['html'])    
});

gulp.task('default', ['connect', 'less', 'scripts', 'html', 'watch']);