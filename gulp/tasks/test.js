'use strict';

import gulp      from 'gulp';
import { jsdom } from 'jsdom';
import { argv }  from 'yargs';
import gjc       from 'gulp-jsx-coverage';
import config    from '../config';

gulp.task('test', () => {

  let files;

  // Allow specification of a single test file
  if ( argv.f || argv.file ) {
    let singleFile = argv.f || argv.file;

    // Allow omission of directory and/or extension
    if ( singleFile.indexOf('app/') === -1 ) { singleFile = `app/${singleFile}`; }
    if ( singleFile.indexOf('.spec.js') === -1 ) { singleFile += '.spec.js'; }

    // Include top-level helper even when running specific tests
    files = ['app/spec.helper.js', singleFile];
  } else {
    // Default to all test files
    files = [config.testFiles];
  }

  // Ensure that all window/DOM related properties
  // are available to all tests
  global.document = jsdom('<!DOCTYPE html><html><body></body></html>');
  global.window = document.parentWindow;
  global.location = { href: '' };
  global.navigator = {};
  global.navigator.userAgent = 'jsdom';
  global.navigator.appVersion = '';

  // Ensure that 'should' and 'sinon' library methods will be
  // available to all tests
  global.Should = require('should');
  global.sinon = require('sinon');

  return (gjc.createTask({
    src: files,

    istanbul: {
      coverageVariable: '__MY_TEST_COVERAGE__',
      exclude: /node_modules|build|gulp|testHelpers/
    },

    transpile: {
      babel: {
        include: /\.jsx?$/,
        exclude: /node_modules/
      }
    },

    coverage: {
      reporters: ['text-summary', 'html'],
      directory: '__coverage__/'
    },

    mocha: {
      reporter: 'spec'
    },

    babel: {
      sourceMap: 'both'
    },

    cleanup: () => {
      process.exit(0);
    }
  }))();

});

// gulp.task('test:watch', () => {
//
//
// });
