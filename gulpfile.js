var gulp = require('gulp'),
    sass = require('gulp-ruby-sass')
    notify = require("gulp-notify")
    bower = require('gulp-bower');

var config = {
    sassPath: './src/sass',
    bowerDir: './bower_components',
    vendorDir: './vendor'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', function() {
	// /vendor/fortawesome/font-awesome/fonts
    return gulp.src(config.vendorDir + '/fortawesome/font-awesome/fonts**.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('js', function() {
	// /vendor/components/jquery
    return gulp.src(
    	[config.vendorDir + '/components/jquery/**.js',
    	// /vendor/twbs/bootstrap-sass/assets/javascripts
		config.vendorDir + '/twbs/bootstrap-sass/assets/javascripts/**/*.js']
    )
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './src/sass',
				// /vendor/twbs/bootstrap-sass/assets/stylesheets
                config.vendorDir + '/twbs/bootstrap-sass/assets/stylesheets',
				// /vendor/fortawesome/font-awesome/scss
                config.vendorDir + '/fortawesome/font-awesome/scss',
            ]
        })
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(gulp.dest('./dist/css'));
});

// Rerun the task when a file changes

gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});


// 'bower',
gulp.task('default', [ 'icons', 'css', 'js']);
