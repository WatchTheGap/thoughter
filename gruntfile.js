module.exports = function configureGrunt(gruntConfig) {


  gruntConfig.initConfig(   {

    clean: ['build/'],

    copy: {
      copyhtml: {
        files: [
          {
          cwd: 'src/',
          src: ['*.html'],
          dest: 'build/',
          expand: true
          }
        ]
      },

      copyjs: {
        files: [
          {
            cwd:'src/js/',
            src: ['*.js'],
            dest: 'build/js/',
            expand: true
          }
        ]
      },

      copyjq: {
        files: [
          {
            src: ['jquery.js'],
            dest: 'build/js/vendor/',
            expand: true
          }
        ]
      }
    },

    sass: {
      all: {
        files: {
          'build/style.css' : 'src/sass/main.scss'
        }
      }

    },

    // jshint: {
    //   appjs: {
    //     options: {
    //       jshintrc: '.jshintrc'
    //     },
    //     files: {
    //       src: ['src/**/*.js']
    //     }
    //   }
    // },  this doesn't work for some reason

    karma: {
      all: {
        options: {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
            'src/**/*.js',
            'test/specs/**/*.js'
          ]
        }
      }
    }







  });
  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask('build', ['clean', 'copy', 'sass', 'karma']);
  // gruntConfig.registerTask('build', ['jshint', 'karma', 'clean', 'copy', 'sass'])


};
