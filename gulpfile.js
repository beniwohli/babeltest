var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
