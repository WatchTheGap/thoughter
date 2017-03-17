module.exports = function configureGrunt(gruntConfig) {


  gruntConfig.initConfig(   {

    clean: ['build/'],

    copy: {
      copyHtml: {
        files: [
          {
          cwd: 'src/',
          src: ['*.html'],
          dest: 'build/',
          expand: true
          }
        ]
      }
    },

    sass: {

    },

    jshint: {

    },

    karma: {

    }







  });
  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask('build', ['copy']);
  // gruntConfig.registerTask('build', ['jshint', 'karma', 'clean', 'copy', 'sass'])


};
