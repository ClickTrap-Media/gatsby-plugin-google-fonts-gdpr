const gulp = require("gulp");
const gulpESLint = require("gulp-eslint");
const path = require("path");

function lint() {
    return gulp.src([
            "src/**/*",
            "typings/**/*"
        ])
        .pipe(gulpESLint())
        .pipe(gulpESLint.format())
        .pipe(gulpESLint.failAfterError());
}

module.exports.lint = lint;