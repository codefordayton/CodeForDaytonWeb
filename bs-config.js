'use strict';
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    'files': [
        'build/**/*.html',
        'build/styles/*.min.css',
        'build/scripts/*.js',
        'build/images/*',
        'build/fonts/*'
    ],
    'watchOptions': {
        'ignoreInitial': true
    },
    'server': {
        'baseDir': 'build',
    },
    'port': 9000,
    //'open': 'local',
    //'browser': 'chrome',
    'reloadOnRestart': false,
    'notify': false,
};
