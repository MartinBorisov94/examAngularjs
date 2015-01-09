'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 3);


app.config(function ($routeProvider) {

  /*  var routeUserChecks = {
        adminRole: {
            authenticate: function(authService) {
                return authService.isAdmin();
            }
        },
        authenticated: {
            authenticate: function(authService) {
                console.log(authService.isLoggedIn());
                return authService.isLoggedIn();
            }
        }
    };

    resolve: routeUserChecks.authenticated
*/

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController'
    });

    /*    $routeProvider.when('/user/editUserAd', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserAdsController'
    });*/



    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});

