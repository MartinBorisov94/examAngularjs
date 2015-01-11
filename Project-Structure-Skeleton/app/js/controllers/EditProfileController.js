'use strict';

app.controller('EditProfileController',
    function ($scope, $location, userProfileService, notifyService, townsService) {

        $scope.towns = townsService.getTowns();

        $scope.submitChange = function(passworDate){
            userProfileService.changeUserPassword(
                passworDate,
                function success(){
                    notifyService.showInfo("User password successful changed");
                    $location.path('/');
                },
                function error(err){
                    notifyService.showError("Error", err);
                }
            )
        };

        $scope.userLoadInf = function(){
            userProfileService.getUserProfile(
                function success(date){
                    $scope.userInformation = date;
                },
                function error(err){
                    notifyService.showError("Err with gating user data", err);
                }
            );
        };

        $scope.userLoadInf();

        $scope.editUser = function(userInformation){
            userProfileService.editUserProfile(
                userInformation,
                function success(){
                    notifyService.showInfo('Successful edit');
                    $location.path('/');
                },
                function error(err){
                    notifyService.showError('Err with edit', err);
                }
            )
        }
    }
);
