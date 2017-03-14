'use strict'; //causes node engine to write a strict for of javascript

var gulp = require('gulp'); //gulp itself
var concat = require('gulp-concat'); //puts all js files into one file
var uglify = require('gulp-uglify'); //minify's js files
var rename = require('gulp-rename'); //rename files
var sass = require('gulp-sass'); //compiles sass to css
var maps = require('gulp-sourcemaps'); //allows you to locate where the original file is
var minifyCSS = require('gulp-minify-css'); //minify's css

gulp.task('concat', function(){
    gulp.src([
        './public/js/app.js',
        './public/js/appCtrl.js',
        './public/js/mainSvc.js'
        ]) //'the files you want to concat, location in the project'
    .pipe(maps.init()) //allows you to locate js file from master/like css
    .pipe(concat('main.js'))//'name of the file you want to create'
    .pipe(maps.write('./')) //where do you want to sourcemaps file
    .pipe(gulp.dest('./public/scripts')); //'location of the file you want to output js folder or dist'
});

gulp.task('uglify', function(){
    gulp.src('./public/scripts/main.js')//'location of the file you want to minify'
    .pipe(uglify())
    .pipe(rename('main.min.js'))//'what you want to new file to be called'
    .pipe(gulp.dest('./public/scripts'))//location of where you want the minify file to go
})

gulp.task('sass', function(){
    gulp.src('./public/scss/master.scss')//where is the location of the scss files or file
    .pipe(maps.init()) //before sass
    .pipe(sass())
    .pipe(maps.write('./')) //relative directory to sass
    .pipe(gulp.dest('./public/css')); //where do you want them to end up
})

gulp.task('minify', function(){
    gulp.src('./public/css/master.css')
    .pipe(minifyCSS()) 
    .pipe(rename('master.min.css')) // renames and creates a new file
    .pipe(gulp.dest('./public/css'))
})

//gulp commands
gulp.task('default', ['sass', 'concat'], function(){ //list the tasks, first argument is just the name
    console.log('gulp is running...');
})
//run after you compiled everything and site is ready for production
gulp.task('p', ['uglify', 'minify'], function(){
    console.log('production is running...')
});
