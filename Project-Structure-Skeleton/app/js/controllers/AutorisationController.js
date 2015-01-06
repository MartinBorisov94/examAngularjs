'use strict';
// TODO
app.controller('AutorisationController',
    function ($scope,$rootScope ,authService) {

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Login successful");
            $location.path("/");
        };

            $rootScope.isAutorisation = function(){
            if(!authService.isAnonymous()){
                return true;
            }
                return false;

        }

    }
);
