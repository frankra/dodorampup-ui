module.exports = function (grunt) {
	var sProxy = "setupProxies:noProxy";
    if(grunt.option('proxy')){
        sProxy = "setupProxies:sapProxy"; 
    }
    
    grunt.registerTask('test', [
		'less:main',
        'bower:install',
		'configureRewriteRules:test',
		sProxy,
		'connect:test',
        'watch'
	]);
};
