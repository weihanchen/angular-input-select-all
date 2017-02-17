module.exports = {
   examples: {
      files: [{
         expand: true,
         flatten: true,
         src: ['build/*.js'],
         dest: 'examples',
         filter: 'isFile'
      }]
   }
};
