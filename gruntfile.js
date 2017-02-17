'use strict';

module.exports = function(grunt) {
   function loadConfig(path) {
      var glob = require('glob'),
         object = {};

      glob.sync('*', {
         cwd: path
      }).forEach(function(option) {
         var key = option.replace(/\.js$/, ''),
            data = require(path + option);
         object[key] = typeof data === 'function' ? data(grunt) : data;
      });

      return object;
   }

   var config = {
      pkg: grunt.file.readJSON('package.json'),
      bowerDirectory: '',
      bowerFile: 'bower.json',
      files: {
         js: {
            src: ['src/<%= pkg.name %>.js'],
            out: 'build/<%= pkg.name %>.js',
            outMin: 'build/<%= pkg.name %>.min.js'
         },
         spec: {
            src: 'test/*.spec.js'
         }
      },
      banners: {
         unminified: '/*!\n' +
            ' * <%= pkg.prettyName %> v<%= pkg.version %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
            ' * License: <%= pkg.license %>\n' +
            ' *\n' +
            ' * Generated at <%= grunt.template.today("yyyy-mm-dd HH:MM:ss o") %>\n' +
            ' */',
         minified: '/*! <%= pkg.prettyName %> v<%= pkg.version %> License: <%= pkg.license %> */'
      }
   };

   grunt.util._.extend(config, loadConfig('./grunt/options/'));
   grunt.initConfig(config);

   require('load-grunt-tasks')(grunt);
   grunt.loadTasks('grunt/tasks');

   grunt.registerTask('test', ['karma:local']);
   grunt.registerTask('coverage', ['test', 'open:coverage']);

   grunt.registerTask('javascript-only', [
      // 'test',
      'concat',
      'ngAnnotate',
      'uglify'
   ]);

   grunt.registerTask('release', [
      'pack',
      'copy:examples',
      'update-bower-version'
   ]);

   grunt.registerTask('default', ['pack']);
};
