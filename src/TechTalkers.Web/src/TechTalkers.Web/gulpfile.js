/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    merge = require('merge2'),
    uglify = require("gulp-uglify"),
    tsProject = tsc.createProject('tsconfig.json');

var paths = {
    webroot: "./wwwroot/",
    clientroot: "./Client/"
};

paths.tsOutputPath = paths.webroot;
paths.js = paths.webroot + "app/**/*.js";
paths.minJs = paths.webroot + "app/**/*.min.js";
paths.concatJsDest = paths.webroot + "app/app.min.js";
paths.allTypeScript = paths.clientroot + '/**/*.ts';
paths.typings = './typings/';
paths.libraryTypeScriptDefinitions = './typings/**/*.ts';

gulp.task('compile:ts', function () {
    var sourceTsFiles = [paths.allTypeScript,                //path to typescript files
                         paths.libraryTypeScriptDefinitions]; //reference to library .d.ts files


    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsOutputPath)),
        tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest(paths.tsOutputPath))
    ]);
});

gulp.task("cleanmin:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});


gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], {base: "."})
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});