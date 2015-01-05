'use strict';

app.controller('LoginController',function ($scope, loginService, identityServices) {

    $scope.login = function(data){
        loginService.login(data,$scope)
            .then(function (answerDate) {
            /*console.log(answerDate.data.access_token);*/
                identityServices.setCurrentUser(answerDate.data.access_token);

            }, function (error) {
                console.log("LoginController errors");
            });
    };
});