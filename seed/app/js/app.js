'use strict';

var softUni = angular.module('softUniModule', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/ads',{
            templateUrl: 'templates/allAds.html'
        });
    });