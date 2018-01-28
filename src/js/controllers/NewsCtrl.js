app.controller('NewsCtrl', [
    '$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {
            var page = 0;
			$http({
				method: 'GET',
  				url: 'http://testtask.sebbia.com/v1/news/categories/'+$routeParams.id+'/news'
			}).then(function successCallback(response) {
				if (response.data.list[0]) {
                    $scope.news = response.data;
                    $scope.report = 'Список новостей:'
                } else {
                    $scope.report = 'Новостей нет, но вы держитесь!'
                }
			    },function errorCallback(response) {

            });

            $scope.getDetails = function (detailsNews) {
                
                $location.path( "/details/"+detailsNews+'' );
            }

            $scope.reloadPage = function (orientation) {
                thisPage = page
                if (orientation) {
                    page = page + 1;
                } else {
                    page = page - 1;
                }
                if (page < 0) {
                    page = 0;
                    return;
                } 
                $http({
                    method: 'GET',
                    url: 'http://testtask.sebbia.com/v1/news/categories/'+$routeParams.id+'/news?page='+page+''
                }).then(function successCallback(response){
                    if (response.data.list[0]) {
                        $scope.news = response.data;
                    } else {
                        page = thisPage;
                    }
                },
                function errorCallback(response) {
        
                });
            }
		
    }
])