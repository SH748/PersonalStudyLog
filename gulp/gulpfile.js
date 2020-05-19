/**
 * 项目gulp配置文件
 */

//引入gulp模块
const gulp = require('gulp');

const jshint = require("gulp-jshint");

gulp.task('jshint', function () {
    // 将你的任务的任务代码放在这
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});