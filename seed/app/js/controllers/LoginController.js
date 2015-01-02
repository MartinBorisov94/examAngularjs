'use strict';

app.controller('LoginController',function ($scope,loginService) {

    $scope.login = function(data){
        loginService.login(data,$scope)
            .then(function (answerDate) {
                console.log(answerDate.data.access_token);
            }, function (error) {
                console.log("gre6ka");
            }); //call login service

    };
});