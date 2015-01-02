app.factory('townDate', function ($resource, $http) {

    //var resource = $resource(
    //    'http://localhost:1337/api/towns',
    //    { update: {
    //        method: 'GET'
    //    }
    //    });



    return {
        getAllTown:  function getAllTown() {
            return $http.get('http://localhost:1337/api/towns',{});
        }
    }
});