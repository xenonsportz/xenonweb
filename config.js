'use strict';

var readJSON = require('read-json');

function getConfig() {
  readJSON('./config/config.json', function(error, configJson){
    console.log(configJson.lasso);
    require('lasso').configure(configJson.lasso);
  });
}

exports.onConfigured = function() {
  getConfig();
};
