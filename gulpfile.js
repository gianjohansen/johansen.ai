var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// compile scss
gulp.task('sass', function(){
  return gulp.src('assets/css/**/*.scss')
    .pipe(sass()) 
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', ['sass'],function (){
  gulp.watch('assets/css/**/*.scss', ['sass']); 
});

