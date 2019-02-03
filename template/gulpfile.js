'use strict';

const gulp = require('../node_modules/gulp');
const sass = require('../node_modules/gulp-sass');

gulp.task("sass", (done) => {
    gulp.src("./sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));

    done();
});
