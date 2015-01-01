'use strict';

var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/allAds.html',
            controller: 'AllAdsController'
        });
        $routeProvider.when('/login', {
           templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
            /*TODO add controller*/
        });
        $routeProvider.otherwise({redirectTo: '/'});
    });


