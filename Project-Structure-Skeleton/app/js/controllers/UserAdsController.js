'use strict';

app.controller('UserAdsController',
    function ($scope, $location, $window, userService, notifyService, pageSize, townsService, categoriesService) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.isEdit = false;
        $scope.towns = townsService.getTowns();
        $scope.categories = categoriesService.getCategories();
            $scope.imgChange = false;

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

        $scope.submitEditAd = function(id, adData){
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

        $scope.publishAgineAd = function(id){
            userService.publishAgainAd(
                id,
                function success(){
                    notifyService.showInfo("Ad was published again");
                    $window.location.reload();
                },
                function error(err){
                    notifyService.showError("Ad wasn't published", err)
                }
            )
        };

        $scope.deleteAd = function(id, title){
            var confermDelete = confirm("Confirm delete ad with title: " + title);
            if(confermDelete){
                userService.deleteAd(id,
                    function success(date) {
                        notifyService.showInfo('Successful delete' + date);
                    },
                    function error(err) {
                        notifyService.showError('error', err);
                    }
                );
            }
            else{
                notifyService.showInfo('Delete ad stopped');
            }
        };



        // img live preview
        $scope.fileSelected = function(fileInputField) {
            delete $scope.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);

                // Ne se obnovva ???
                $scope.imgChange = true;

            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.beckToAds= function(){
            $scope.isEdit = false;
        };

    }
);