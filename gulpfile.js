var
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	closure = require('gulp-jsclosure'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('modules', function () {
	//ARQUIVOS A COMPILAR
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/angular/angular.min.js',
		'./node_modules/angular-route/angular-route.min.js',
		'./node_modules/angular-aria/angular-aria.min.js',
		'./node_modules/angular-animate/angular-animate.min.js',
		'./node_modules/angular-material/angular-material.min.js',
		'./node_modules/angular-messages/angular-messages.min.js',
		'./node_modules/angular-loading-bar/build/loading-bar.min.js',
		'./node_modules/angular-ui-sortable/dist/sortable.min.js',
		'./node_modules/tinycolor2/dist/tinycolor-min.js',
		'./node_modules/md-color-picker/dist/mdColorPicker.min.js',
	])
		.pipe(sourcemaps.init())
		.pipe(concat('modules.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build'))
	;
});

gulp.task('app', ['modules'], function () {
	//ARQUIVO HTML
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));

	//ARQUIVOS A COMPILAR
	return gulp.src([
			'app/**/*.js'
		])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build'))
	;
});

gulp.task('assets', function () {
	gulp.src('app/assets/css/**/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist'))
	;
	
	gulp.src('app/.htaccess')
		.pipe(gulp.dest('dist'))
	
	//ARQUIVOS DE TEMPLATE
	gulp.src('app/views/**/*.html')
		.pipe(gulp.dest('dist/template'))
});

gulp.task('merge', ['modules', 'app'], function () {
	return gulp.src([
		'build/modules.js',
		'build/app.js'
	])
		.pipe(concat('app.js'))
		.pipe(closure())
		.pipe(gulp.dest('dist'))
});

gulp.task('clean', ['modules', 'app', 'merge'], function () {
	return gulp.src('build')
		.pipe(clean());
});

gulp.task('default', ['clean', 'modules', 'app', 'merge', 'assets']);