'use strict';


module.exports = function IndexModel(req) {
  var signInParam = req.query._signin;
  var pageMeta = {
    title: 'Sign in or Register | Xenon Sportz'
  };

  console.log(signInParam);
  var viewModel = {
    name: 'signin-page',
    pageMeta: pageMeta
  };

  return viewModel;
};
