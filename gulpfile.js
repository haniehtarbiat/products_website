var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var gulpWatch = require('gulp-watch');
var reload = browserSync.reload;

const watch = () => {
  gulpWatch([
    '*.html',
    'style/*.css'
  ]).on('change', reload);
};

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
        baseDir: "./"
      }
  });
  watch();
});

gulp.task('default', ['browser-sync'])