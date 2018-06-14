module.exports = function (grunt) {
	var sProxy = "setupProxies:noProxy";
    if(grunt.option('proxy')){
        sProxy = "setupProxies:sapProxy"; 
    }
    
    grunt.registerTask('mock', [
		'less:main',
        'bower:install',
		'configureRewriteRules:mock',
		sProxy,
		'connect:mock',
        'watch'
	]);
};
