'use strict';

var app = angular.module('softUniApp', ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {

        var routeUserChecks = {
            authenticated: {
                authenticate: function(auth) {
                    return auth.isAuthenticated();
                }
            }
        };

        $routeProvider.when('/allAds', {
            templateUrl: 'templates/allAds.html',
            controller: 'AllAdsController'
        });
        $routeProvider.when('/', {
            templateUrl: 'templates/pagingAds.html',
            controller: 'PaginatorController'
        });
        $routeProvider.when('/login', {
           templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
            /*TODO add controller*/
        });

        // TODO Testing after loging how work route
        $routeProvider.when('/user', {
            template: '<div class="col-md-10 well"> Testing </div>'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });


