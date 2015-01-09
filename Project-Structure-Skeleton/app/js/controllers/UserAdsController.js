'use strict';

app.controller('UserAdsController',
    function ($scope, $location, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.isEdit = false;


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

        $scope.editAd = function(id){
            userService.getUserAdById(
                id,
                function success(data) {
                    $scope.userAd = data;
                    $scope.isEdit = true;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }

            );
        };

        $scope.beckToAds= function(){
            $scope.isEdit = false;
        }

    }
);