var gulp = require('gulp');
var browsersync = require("browser-sync").create();

gulp.task('build-server', function (done) {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
    done();
    console.log('Server was launched');
});

// 監視ファイル
gulp.task('browser-watch', function(done) {
    gulp.watch("./*.html", gulp.task('browser-reload'));
    gulp.watch("./*.css", gulp.task('browser-reload'));
    gulp.watch("./*.js", gulp.task('browser-reload'));
    done();
    console.log(('gulp watch started'));
});

// ブラウザのリロード
gulp.task('browser-reload', function (done){
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});


gulp.task('default', gulp.series('build-server', 'browser-watch', function(done){
    done();
    console.log('Default all task done!');
}));
    

