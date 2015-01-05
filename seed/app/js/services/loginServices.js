'use strict';
app.factory('loginService',function($http){

    return{
        login: function(data,scope){
            return $http.post('http://localhost:1337/api/user/login',data);
        }
    }

});