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
      bower: {
        js: {
          angular: 'bower_components/angular/angular.min.js',
          jquery: 'bower_components/jquery/dist/jquery.min.js'
        },
        file: 'bower.json'
      },
      examples: {
         js: {
           plugins: {
             root: 'examples/js/plugins',
             angular: 'examples/js/plugins/angular',
             materialDesignLite: 'examples/js/plugins/material-design-lite',
             jquery: 'examples/js/plugins/jquery'
           }
         },
         css: {
           plugins: {
             root: 'examples/css/plugins',
             materialDesignLite: 'examples/css/plugins/material-design-lite',
           }
         }
      },
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
      npm: {
        js: {
          angular: 'node_modules/angular/angular.min.js',
          angularMocks: 'node_modules/angular-mocks/angular-mocks.js',
          materialDesignLite: 'node_modules/material-design-lite/material.min.js'
        },
        css: {
          materialDesignLite: 'node_modules/material-design-lite/material.min.css'
        }
      },
      banners: {
         unminified: '/*!\n' +
            ' * <%= pkg.prettyName %> v<%= pkg.version %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
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
      'test',
      'concat',
      'ngAnnotate',
      'uglify'
   ]);

   grunt.registerTask('release', [
      'pack',
      'copy:examples',
      'coveralls',
      'update-bower-version'
   ]);

   grunt.registerTask('default', ['pack']);
};
