const gulp = require("gulp");
const gulpBabel = require("gulp-babel");

// Compile JavaScript using Babel
function babel() {
    return gulp.src("src/**/*")
        .pipe(gulpBabel())
        .pipe(gulp.dest("./"));
}

module.exports.babel = babel;
