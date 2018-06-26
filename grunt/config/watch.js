'use strict';

module.exports = function (grunt) {
    grunt.config.set('watch', {
        options: {
            livereload: true
        },
        files: ['webapp/**/*.*', 'webapp/*.*'],
        tasks: ['less', 'eslint']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};