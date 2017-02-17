'use strict';

module.exports = function(grunt) {
   grunt.registerTask('pack', function(output) {
      var tasks = [];

      if (!output || output === 'js') {
         tasks.push('javascript-only');
      }

      grunt.task.run(tasks);
   });
};
