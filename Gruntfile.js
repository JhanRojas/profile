module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      options: {
      },
      app: {
        src: ['*.html'],
        ignorePath:  /\.\.\//
      }
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/index.html']
    },
    copy:{
      html: {
        src: './index.html', dest: 'dist/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('build',[
    'copy:html',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin'
    ]);
};