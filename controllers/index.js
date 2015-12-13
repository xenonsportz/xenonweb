'use strict';

var SignInModel = require('../models/signin');
var HomePageModel = require('../models/home');

module.exports = function(router) {
    var signInPage = require('public/templates/pages/signin/page.marko'),
        homePage = require('public/templates/pages/home/page.marko');


        console.log("router option");
        console.log(router);

    //Home page
    router.get('/', function(req, res) {
        //res.render('./../public/templates/index', model);
        //res.render('pages/signin/index1', model);
        var homePageModel = new HomePageModel(req);
        homePage.render(homePageModel, res);
        // res.send('you can find me at /users');
    });


    router.get('/signin', function(req, res) {
        var signInModel = new SignInModel(req);
        signInPage.render(signInModel, res);
    });
};
