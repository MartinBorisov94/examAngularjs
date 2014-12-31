'use strict';

var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/ads', {
            templateUrl: 'templates/allAds.html',
            controller: 'AllAdsController'
        });
    });


