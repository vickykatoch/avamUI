var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    Config = require('./gulpfile.config'),
    angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    gulpConfig = new Config();
	
	
gulp.task('clean', function(cb){
    del(['dist'], cb);
});

gulp.task('compile:ts', function(){
    var sourceFiles = [
        gulpConfig.typeScriptSourceFiles,
        gulpConfig.libraryTypeScriptDefinitions
    ];
    return gulp.src(sourceFiles)
        .pipe(ts({
            noImplicitAny: true
           }))
        .pipe(gulp.dest(gulpConfig.outputPath));
});