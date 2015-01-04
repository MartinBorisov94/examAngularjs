app.controller('PaginatorController', function($scope, adsData, $log) {
    var pageSize = 3;
    var currentPage = 1;

    adsData.getResultsPage(pageSize, currentPage)
        .then(function(result) {
            $scope.data = result.data;
            $scope.pagesCount = result.data.numPages;
        }, function (error) {
            $log.error(error);
        });


   /* function getResultsPage(pageNumber) {
        $http.get('http://localhost:1337/api/ads?pagesize='+ pageSize +'&startpage=' + pageNumber)
            .then(function(result) {
                $scope.data = result.data;
                $scope.pagesCount = result.data.numPages;
            });
    }
*/
    $scope.nextPage = function(){
        currentPage++;
        adsData.getResultsPage(pageSize, currentPage)
            .then(function(result) {
                $scope.data = result.data;
                $scope.pagesCount = result.data.numPages;
            }, function (error) {
                $log.error(error);
            });
    };

    $scope.beckPage = function(){
        if(currentPage > 1){
            currentPage--;
            adsData.getResultsPage(pageSize, currentPage)
                .then(function(result) {
                    $scope.data = result.data;
                    $scope.pagesCount = result.data.numPages;
                }, function (error) {
                    $log.error(error);
                });
        }
    };
});

