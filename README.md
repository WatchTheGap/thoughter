# Thoughter

Definitely not a Twitter clone.

Week 4 Day 4 Homework - Process Automation
  - Adds automation to DOM and Ajax testing homework.
Written by Sara Basile (forked from Jordan's Awesome Repo)

Build automation managed through Grunt.

To generate a new build:
  Fork, clone, and branch source repository from Jakerella.
  Initialize node_modules and add the following developer dependencies:
  
    *test assertion framework*
    - chai  

    *for process automation*
    - grunt-contrib-clean

    - grunt-contrib-copy

    - grunt-contrib-jshint

    - grunt-contrib-sass

    - grunt-contrib-watch

    - grunt-karma

    *jQuery*
    - jquery

    *for running mocha/chai tests*
    - karma

    - karma-chai

    - karma-chrome-launcher

    - karma-mocha

    *for testing framework*
    - mocha

  Set jshintrc to allow for ES6 options.
  In terminal, run "grunt build" from project directory "thoughter".
    This will generate a new build directory, lint all js files through jshint,
    run the provided tests through karma, and copy all necessary source files to
    their final locations. DO NOT EDIT FILES IN THE BUILD DIRECTORY.
