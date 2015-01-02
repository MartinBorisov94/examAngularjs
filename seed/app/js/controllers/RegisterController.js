'use strict';

app.controller('RegisterController',function ($scope,registerServices) {

    $scope.register = function(data){
        registerServices.register(data,$scope)
            .then(function (answerDate) {
                console.log(answerDate.data.access_token);
            }, function (error) {
                console.log("gre6ka");
            });
    };
});