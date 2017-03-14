'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

// gulp.task('concat', function(){
//     gulp.src(['the files you want to concat, location in the project'])
//     .pipe(concat('name of the file you want to create'))
//     .pipe(gulp.dest('location of the file you want to output js folder or dist'));
// });

// gulp.task('uglify', function(){
//     gulp.src('location of the file you want to minify')
//     .pipe(uglifly())
//     .pipe(renane('what you want to new file to be called'))
//     .pipe(gulp.dest('location of where you want the minify file to go'))
// })

gulp.task('sass', function(){
    gulp.src('public/scss/master.scss')//where is the location of the scss files or file
    .pipe(sass())
    .pipe(gulp.dest('public/style')); //where do you want them to end up
})

gulp.task('default', ['sass'], function(){
    console.log('gulp is running...');
})
