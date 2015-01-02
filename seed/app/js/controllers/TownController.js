app.controller('TownController',
    function($scope, townDate, $log) {

        townDate.getAllTown()
            .then(function (data) {
                $scope.towns = data;
                console.log("raboti");


            }, function (error) {
                $log.error(error);
            })
    });