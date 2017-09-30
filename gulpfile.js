var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');
var envify = require('gulp-envify');
var browserify = require('gulp-browserify');
var SourceMap = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var SourceMapSupport = require('gulp-sourcemaps-support');
gulp.task('react', () => {
    var environment = {
        NODE_ENV: 'production'
    };
    gulp.src('./src/font.js')
        .pipe(SourceMap.init())
        .pipe(babel({
            presets: ['es2015', 'es2016', 'es2017', 'stage-0', 'react'],
            plugins: ['transform-decorators-legacy']
        }))
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production,
            transformKey: 'production'
        }))
        .pipe(envify(environment)) //加入这个插件可以修改代码中的环境等于production
        .pipe(uglify())
        .pipe(SourceMap.write('.'))
        .pipe(gulp.dest('lib'))
});
gulp.task('default', () => {
    return watch('./index.js', function () {
        gulp.run('react');
    });
});