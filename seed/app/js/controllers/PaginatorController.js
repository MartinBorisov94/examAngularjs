app.controller('PaginatorController', function($scope, $http) {
    var pageSize = 3;
    var currentPage = 1;
    getResultsPage(1);


    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

    function getResultsPage(pageNumber) {
        // this is just an example, in reality this stuff should be in a service
        $http.get('http://localhost:1337/api/ads?pagesize='+ pageSize +'&startpage=' + pageNumber)
            .then(function(result) {
                $scope.data = result.data;
                $scope.pagesCount = result.data.numPages;
            });
    }

    $scope.nextPage = function(){
        currentPage++;
        getResultsPage(currentPage);
    };

    $scope.beckPage = function(){
        if(currentPage > 1){
            currentPage--;
            getResultsPage(currentPage);
        }
    };
});

