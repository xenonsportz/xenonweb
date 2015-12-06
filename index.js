'use strict';

require('app-module-path').addPath(__dirname);
require('marko/node-require').install();

var express = require('express');
var kraken = require('kraken-js');
var viewEngine = require('view-engine');

var options, app;

//require('./config/passport')(passport); // pass passport for configuration



/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));


//viewEngine.register('marko', require('view-engine-marko'));

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
