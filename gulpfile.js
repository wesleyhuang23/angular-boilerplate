'use strict'; //causes node engine to write a strict for of javascript

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('concat', function(){
    gulp.src([
        './public/js/app.js',
        './public/js/appCtrl.js',
        './public/js/mainSvc.js'
        ]) //'the files you want to concat, location in the project'
    .pipe(concat('main.js'))//'name of the file you want to create'
    .pipe(gulp.dest('./public/scripts')); //'location of the file you want to output js folder or dist'
});

gulp.task('uglify', function(){
    gulp.src('./public/scripts/main.js')//'location of the file you want to minify'
    .pipe(uglify())
    .pipe(rename('main.min.js'))//'what you want to new file to be called'
    .pipe(gulp.dest('./public/scripts'))//location of where you want the minify file to go
})

gulp.task('sass', function(){
    gulp.src('./public/master.scss')//where is the location of the scss files or file
    .pipe(maps.init()) //before sass
    .pipe(sass())
    .pipe(maps.write('./')) //relative directory to sass
    .pipe(gulp.dest('./public/style')); //where do you want them to end up
})


//gulp commands
gulp.task('default', ['sass', 'concat'], function(){ //list the tasks, first argument is just the name
    console.log('gulp is running...');
})

gulp.task('production', ['uglify'], function(){
    console.log('production is running...')
});
