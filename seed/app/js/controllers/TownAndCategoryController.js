app.controller('TownAndCategoryController',
    function($scope, data, $log) {

        data.getAllTown()
            .then(function (data) {
                $scope.towns = data;
            }, function (error) {
                $log.error(error);
            })
        data.getAllCategories()
            .then(function (data) {
                $scope.categories = data;
            }, function (error) {
                $log.error(error);
            })
    });