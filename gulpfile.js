var gulp = require('gulp');
var git = require('gulp-git');
var run = require('run-sequence').use(gulp);
gulp.task('init', function () {
    git.init(function (err) {
        if (err) throw err;
    });
});
gulp.task('add', function () {
    return gulp.src('./')
        .pipe(git.add());
});
gulp.task('commit', function () {
    return gulp.src('./')
        .pipe(git.commit('initial commit'));
});
gulp.task('addremote', function () {
    git.addRemote('origin', 'git@github.com:304223751/gulp-git.git', function (err) {
        if (err) throw err;
    });
});
gulp.task('push', function () {
    git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
});
gulp.task('default', function () {
    run('init', 'add', 'commit', 'addremote', 'push');
});
