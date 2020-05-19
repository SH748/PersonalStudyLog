//引入gulp模块
const gulp = require('gulp');

//引入jshint
const jshint = require('gulp-jshint');

//引入babel
const babel = require('gulp-babel');

const browserify = require('gulp-browserify');
const rename = require('gulp-rename');

//定义任务
// gulp.task('default', function () {
//     // 将你的任务的任务代码放在这
//     console.log('123');
// });

//创建语法检查任务
gulp.task('jshint', function () {
    // 将你的任务的任务代码放在这
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//语法转换任务
gulp.task('babel', () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel({ //进行语法转换
            presets: ['@babel/env']
        })).pipe(gulp.dest('build/js')) //输出到指定目录
});

gulp.task('browserify', function () {
    return gulp.src('./build/js/index.js')
        .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
        .pipe(rename('built.js')) //为了防止冲突将文件重命名
        .pipe(gulp.dest('dist/js')) //输出到指定位置
});


gulp.task('dev-clean', function () {
    return gulp.src(devPath.buildPath, {
            allowEmpty: true
        })
        .pipe(clean());
})