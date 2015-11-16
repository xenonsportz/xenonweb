'use strict';

var SignInModel = require('../models/signin');

module.exports = function(router) {
    var signInPage = require('public/templates/pages/signin/page.marko');
    
    // Home page
    //  router.get('/', function(req, res) {
    //     //res.render('./../public/templates/index', model);
    //     res.render('pages/signin/index1', model);
    //
    //     // res.send('you can find me at /users');
    // });


    router.get('/signin', function(req, res) {
        var signInModel = new SignInModel(req);
        signInPage.render(signInModel, res);
    });
};
