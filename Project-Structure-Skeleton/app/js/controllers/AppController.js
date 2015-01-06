'use strict';

// The AppController holds the presentation logic for the entire app (common for all screens)
app.controller('AppController',
    function ($scope, authService, $location, notifyService) {
        $scope.authService = authService;
        // Implement the "logout" button click event handler
        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Login successful");
            $location.path("/");
        };

    }
);
