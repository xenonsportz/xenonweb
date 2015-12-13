'use strict';

function Widget(widgetConfig) {
  var self = this;
  console.log('test 111');
  self.init();
  $('#fb_login_link').on('click', function() {
    console.log('test wicket 2');
    fb_login();
  });
}

Widget.prototype = {
  init: function() {
    var _self = this;
    //alert('asdas');
    console.log("test 66666666");
  }
};

window.fbAsyncInit = function() {
    FB.init({
        appId: '1680664148845353',
        oauth: true,
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });

};

function fb_login() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information1 1111.... ');
            console.log("start location href");
            window.location.href = '/';
          //  console.log(response.email); // dump complete info
          //  access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function(response) {
                user_email = response.email; //get user email
                console.log(user_email);
                // you can store this data into your database
            });


        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'publish_pages,publish_actions,email'
    });
}

(function() {
    var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
}());

exports.Widget = Widget;
