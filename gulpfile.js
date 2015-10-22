
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint');

gulp.task('server', function () {
    return connect.server({
        port: 2222,
        livereload: true
    })
})

gulp.task('watch', function() {
    gulp.watch(['colorBar.js', 'index.html'], ['jshint'])
})

gulp.task('jshint', function () {
    return gulp.src(['colorBar.js'])
        .pipe(jshint({asi:true}))
        .pipe(jshint.reporter('default'))
        .pipe(connect.reload())
})

gulp.task('default', ['jshint', 'server', 'watch'])
