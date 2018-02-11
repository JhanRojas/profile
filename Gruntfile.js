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
    },
    critical: {
      test: {
          options: {
              base: './dist',
              css: [
                  'dist/styles/main.css',
                  'dist/styles/vendor.css'
              ],
              width: 320,
              height: 70
          },
          src: 'dist/index.html',
          dest: 'dist/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-critical');
  grunt.registerTask('build',[
    'copy:html',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin',
    'critical'
    ]);
};