module.exports = {
   examples: {
      files: [{
         expand: true,
         flatten: true,
         src: ['<%= files.js.out %>', '<%= files.js.outMin %>'],
         dest: '<%= examples.js.plugins.root %>/<%= pkg.name %>',
         filter: 'isFile'
      },{
         expand: true,
         flatten: true,
         src: ['<%= npm.js.angular %>'],
         dest: '<%= examples.js.plugins.angular %>'
      }, {
         expand: true,
         flatten: true,
         src: ['<%= npm.js.materialDesignLite %>'],
         dest: '<%= examples.js.plugins.materialDesignLite %>'
      }, {
         expand: true,
         flatten: true,
         src: ['<%= npm.css.materialDesignLite %>'],
         dest: '<%= examples.css.plugins.materialDesignLite %>'
      }, {
         expand: true,
         flatten: true,
         src: ['<%= npm.css.fontAwesome %>'],
         dest: '<%= examples.css.plugins.fontAwesome %>'
      }, {
         expand: true,
         flatten: true,
         src: ['<%= npm.fonts.fontAwesome %>/*'],
         dest: '<%= examples.css.plugins.fonts %>'
      }]
   }
};
