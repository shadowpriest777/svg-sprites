var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');
 
var config = {
    shape: {
        dimension: {        // Set maximum dimensions
            maxWidth: 500,
            maxHeight: 500
        },
        spacing: {          // Add padding
            padding: 7
        }
    },
    mode: {
        symbol: {           // Using <symbol> element in SVG
            dest : '.'
        }
    }
};

gulp.task('svg-sprite', function (cb) {
    return gulp.src('assets/i/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('sprites'));
});