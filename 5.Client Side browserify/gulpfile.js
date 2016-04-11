var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
    
    gulp.task('bundle',function() {
    	return browserify('./src/pages/home/client.js')
        .transform('markoify')
        .bundle()
        .pipe(source('browser.js'))
        .pipe(gulp.dest('./public/js'));        
        
    });