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
         src: ['<%= bower.js.angular %>'],
         dest: '<%= examples.js.plugins.angular %>'
      }]
   }
};
