/* global process: false */

'use strict';

module.exports = function() {
   return {
      options: {
         configFile: 'karma.conf.js'
      },
      local: {
         singleRun: true,
         browsers: ['PhantomJS'],
         reporters: ['mocha', 'coverage'],
         mochaReporter: {
            output: process.env.TRAVIS ? 'full' : 'minimal'
         }
      },
      remote: {
         singleRun: true,
         captureTimeout: 120000,
         sauceLabs: {
            testName: 'angular-input-select-all'
         },
         recordVideo: false,
         recordScreenshots: false,
         reporters: ['mocha']
      }
   };
};
