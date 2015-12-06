'use strict';

var express = require('express');
var passport = require('passport');

module.exports = function xenonAuthentication(options) {
  var app = express();
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  console.log("passport");
  console.log(passport);
  return app;
};
