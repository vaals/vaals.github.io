var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('less', function () {
    gulp.src('./build/less/**/*.less').pipe(less()).pipe(gulp.dest('./build/css'));
});
gulp.task('watch', function () {
    gulp.watch('./build/less/**/*less', ['less']);
});