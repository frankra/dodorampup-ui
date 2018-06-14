'use strict';

var proxySnippet = require('grunt-middleware-proxy/lib/Utils').getProxyMiddleware();
var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

module.exports = function (grunt, config) {
    grunt.config.set('connect', {
        dev: {
            options: {
                port: 1234,
                hostname: 'localhost',
                livereload: true,
                open: "http://localhost:1234/webapp/index.html",
                middleware: function (connect, options, middlewares) {
                    middlewares.unshift(proxySnippet);
                    middlewares.unshift(rewriteRulesSnippet);

                    return middlewares;
                }
            }
        },
        test: {
            options: {
                port: 1234,
                hostname: 'localhost',
                livereload: true,
                open: "http://localhost:1234/webapp/test/testsuite.qunit.html",
                middleware: function (connect, options, middlewares) {
                    middlewares.unshift(proxySnippet);
                    middlewares.unshift(rewriteRulesSnippet);

                    return middlewares;
                }
            }
        },
        mock: {
            options: {
                port: 1234,
                hostname: 'localhost',
                livereload: true,
                open: "http://localhost:1234/webapp/test/mockServer.html",
                middleware: function (connect, options, middlewares) {
                    middlewares.unshift(proxySnippet);
                    middlewares.unshift(rewriteRulesSnippet);

                    return middlewares;
                }
            }
        },
        noProxy: {
            proxies: [{
                context: '/test-resources',
                host: 'sapui5.hana.ondemand.com',
                https: true,
                headers: {
                    'accept-encoding': 'utf8'
                }
            },{
                context: '/SFSF',
                host: 'localhost',
                port: 8080,
                https: false
            },{
                context: '/api',
                host: 'localhost',
                port: 8080,
                https: false
            }]
        },
        sapProxy: {
            proxies: [{
                context: '/test-resources',
                host: 'sapui5.hana.ondemand.com',
                https: true,
                headers: {
                    'accept-encoding': 'utf8'
                },
                proxyTunnel: {
                    host: 'proxy',
                    port: 8080,
                    https: false
                }
            },{
                context: '/SFSF',
                host: 'localhost',
                port: 8080,
                https: false
            },{
                context: '/api',
                host: 'localhost',
                port: 8080,
                https: false
            }]
        },
        rules: [{
            from: '/destinations/dodorampupBackend/SFSF',
            to: '/SFSF'
        },{
            from: '/destinations/dodorampupBackend/api',
            to: '/api'
        },{
            from: '/resources',
            to: '/bower_components/sapui5/resources'
        }]
    });
    grunt.loadNpmTasks('grunt-connect-rewrite');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-middleware-proxy');
};