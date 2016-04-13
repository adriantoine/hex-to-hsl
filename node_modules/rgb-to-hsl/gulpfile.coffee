gulp = require('gulp')
plumber = require('gulp-plumber')

gutil = require('gulp-util')
coffee = require('gulp-coffee')

# Code linting
coffeelint = require('gulp-coffeelint')

# Notifications for OSX
notify = require('gulp-notify')

errorHandler = notify.onError('Error: <%= error.message %>')

defaultTasks = [
  'coffee'
]
coffeeFiles = 'src/*.coffee'
exampleFiles = 'examples/*.coffee'


buildCoffee = (src, dest) ->
  gulp
    .src(src)
    .pipe(plumber({errorHandler}))
    .pipe(coffee())
    .on('error', gutil.log)
    .pipe(gulp.dest(dest))


coffeelintTask = (src) ->
  gulp
    .src(src)
    .pipe(plumber({errorHandler}))
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .on('error', gutil.log)


gulp.task 'coffee', ['coffeelint'], ->
  buildCoffee(coffeeFiles, './')
  buildCoffee(exampleFiles, './examples')


gulp.task 'coffeelint', ->
  coffeelintTask(coffeeFiles)


gulp.task 'default', defaultTasks, ->
  gulp.watch coffeeFiles, ['coffee']
  gulp.watch exampleFiles, ['coffee']
