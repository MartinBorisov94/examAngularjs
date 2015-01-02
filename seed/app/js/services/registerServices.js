'use strict';
app.factory('registerServices',function($http){


    return{
        register: function(data,scope){
            return $http.post('http://localhost:1337/api/user/register',data);

        }
    }

});