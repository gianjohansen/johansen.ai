var gulp = require('gulp');
var sass = require('gulp-sass');

// compile scss
gulp.task('sass', function(){
  return gulp.src('assets/css/**/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', ['sass'],function (){
  gulp.watch('assets/css/**/*.scss', ['sass']); 
});

