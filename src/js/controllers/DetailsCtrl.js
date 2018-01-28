app.controller('DetailsCtrl', [
    '$scope', '$http', '$routeParams', '$location', '$sce',
    function($scope, $http, $routeParams, $location, $sce) {

        $http({
            method: 'GET',
            url: 'http://testtask.sebbia.com/v1/news/details?id='+$routeParams.id+''
        }).then(function successCallback(response) {
            $scope.detailsNews = response.data.news;
            $scope.fullDesc = $sce.trustAsHtml(response.data.news.fullDescription)
        },function errorCallback(response) {

        });
        
    }
])