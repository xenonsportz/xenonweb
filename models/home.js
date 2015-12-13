'use strict';


module.exports = function HomePageModel(req) {
  var pageMeta = {
    title: 'Xenon Sports'
  };

  var viewModel = {
    name: 'home-page',
    pageMeta: pageMeta
  };

  return viewModel;
};
