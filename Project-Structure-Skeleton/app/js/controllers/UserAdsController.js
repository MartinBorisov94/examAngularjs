'use strict';

app.controller('UserAdsController',
    function ($scope, $location, userService, notifyService, pageSize, townsService, categoriesService) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.isEdit = false;
        $scope.towns = townsService.getTowns();
        $scope.categories = categoriesService.getCategories();


        /*$scope.cukam = function(params){
            console.log("cukat me ++" + params);
        };*/


        $scope.reloadUserAds = function() {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.userAds = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.deactivateAd = function(id){
            userService.deactivateAd(
                id,
                function success(data){
                    $scope.userAds = data;
                    $scope.reloadUserAds();
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                })
        };

        $scope.isDisabled = function(status){
            if(status === "Inactive"){
                return true;
            }
            else{
                return false;
            }
        };

        $scope.reloadUserAds();

        $scope.getAd = function(id){
            userService.getUserAdById(
                id,
                function success(data) {
                    $scope.userAd = data;
                    $scope.isEdit = true;
                },
                function error(err) {
                    notifyService.showError("Cannot load ad", err);
                }

            );
        };

        $scope.submitAd = function(id, adData){
                userService.editUserAdById(id, adData,
                    function success() {
                        notifyService.showInfo('Success');
                        $scope.isEdit = false;
                    },
                    function error(err) {
                        notifyService.showError('error', err);
                    }
                );
        };

        $scope.beckToAds= function(){
            $scope.isEdit = false;
        };

    }
);