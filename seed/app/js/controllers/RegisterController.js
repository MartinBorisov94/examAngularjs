'use strict';

app.controller('RegisterController',function ($scope,registerServices, identityServices) {

    $scope.register = function(data){
        registerServices.register(data,$scope)
            .then(function (answerDate) {
            /*console.log(answerDate.data.access_token);*/
                identityServices.setCurrentUser(answerDate.data.access_token);
            }, function (error) {
                console.log("registerController errors");
            });
    };
});