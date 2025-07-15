const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const scssSrc = './scss/**/*.scss';
const cssDest = './css';

function compileSass() {
  return gulp.src(scssSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
}

function watchFiles() {
  gulp.watch(scssSrc, compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);