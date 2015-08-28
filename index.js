/*
* Author: Michael Taylor
* www.michaeltaylor3d.com
* 
* Usage: 
* Add the following to your Gulpfile: 
* 
* gulp.task('cordova', require('gulp-cordova-bundleid'));
*/

'use strict';

var vfs = require('vinyl-fs');
var args = require("yargs").argv;
var gutil = require('gutil');
var $ = require('gulp-load-plugins')();

function Bundle() {}

Bundle.prototype.run = function() {
  this.set(args.bundle);
}

Bundle.prototype.set = function(bundleid) {
  return vfs.src(['./config.xml'])
    .pipe($.xmlEditor([
      { path: '.', attr: { 'id': bundleid } } 
    ]))
  .pipe(vfs.dest("./"));
}

var init = new Bundle();
module.exports = init.run();
