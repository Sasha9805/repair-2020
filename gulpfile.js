"use strict";
// Новый синтаксис
// const {src, dest, parallel} = require('gulp');

// function defaultTask(cb) {
//   console.log('gulp');
//   cb();
// }

// function minifyCss() {
//   return src('./src/css/*')
//   .pipe(dest('dist/css'));
// }

// exports.default = defaultTask;
// exports.minifycss = minifyCss;

// Лучше использовать так:
const gulp = require('gulp');
const gulpCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Сжатие CSS
gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
  .pipe(gulpCss({compatibility: 'ie8'})) // можно без опций
  .pipe(gulp.dest('dist/css'));
});

// Перенос JS
gulp.task('move-js', () => {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'));
});

// Сжатие JS
gulp.task('minify-js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(gulpIf('!*.min.js', uglify()))
    .pipe(gulpIf('!*.min.js', rename(function (path) {
      path.extname = ".min.js";
    })))
    .pipe(gulp.dest('dist/js'));
});

// Так не сработает, расширение у сжатых будет min.min.js, и они тоже будут сжиматься
// gulp.task('minify-js', () => {
//   return gulp.src('./src/js/*.js', '!./src/js/*.min.js')
//     .pipe(uglify())
//     .pipe(rename(function (path) {
//       path.extname = ".min.js";
//     }))
//     .pipe(gulp.dest('dist/js'));
// });

// Сжатие HTML
gulp.task('minify-html', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    })) // можно без опций
    .pipe(gulp.dest('dist'));
});

// Перенос шрифтов
gulp.task('move-fonts', () => {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

// Сжатие картинок
gulp.task('tinypng', () => {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'V6lb5vfCDdh7L8097LDtqv4cvP5Y2XJw'
    }))
    .pipe(gulp.dest('dist/img'));
});

// Объединим в один таск
gulp.task('build', gulp.parallel('minify-html', 'minify-css', 'minify-js', 'move-fonts', 'tinypng'));

// Новый синтаксис
// exports.minify = () => {
//   return src('./src/css/*.css')
//   .pipe(gulpCss())
//   .pipe(dest('dist/css'));
// };
// exports.build = parallel();