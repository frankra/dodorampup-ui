'use strict';

module.exports = function (grunt) {

    var opts = {
        options: {
        },
        target: ['webapp/**/*.js', 'webapp/*.js']
    };

    if (grunt.option('format') == "checkstyle") {
        opts.options.format = "checkstyle";
        opts.options.outputFile = "target/eslint.checkstyle.xml";
    }
    
    if(grunt.option('fix')){
        opts.options.fix = true;
    }

    grunt.config.set('eslint', opts);

    grunt.loadNpmTasks('grunt-eslint');
};
