module.exports = function (grunt) {
    
    var sProxy = "setupProxies:noProxy";
    if(grunt.option('proxy')){
        sProxy = "setupProxies:sapProxy"; 
    }
    
    grunt.registerTask('serve', [
        'less:main',
        'bower:install',
        'configureRewriteRules:dev',
        sProxy,
        'connect:dev',
        'watch'
    ]);
};
