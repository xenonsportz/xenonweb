// 'use strict';
//
// var page = require('marko').load(require.resolve('./page.marko'));
//
// var templatePath = require.resolve('./page.marko');
// var template = require('view-engine').load(templatePath);
//
//
// module.exports = function(req, res) {
//   var signInParam = req.query.signin;
//   var pageMeta = {
//     title: 'Sign in or Register | Xenon Sportz'
//   };
//
//   var viewModel = {
//     name: 'signin-page',
//     pageMeta: pageMeta
//   };
//
//   page.render(viewModel, res);
// };
