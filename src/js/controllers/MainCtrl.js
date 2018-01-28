app.controller('MainCtrl', [
    '$scope', '$http', '$location',
    function($scope, $http, $location) {
       
        $http({
  			method: 'GET',
  			url: 'http://testtask.sebbia.com/v1/news/categories'
		}).then(function successCallback(response) {
    		$scope.categories = response.data;

  		}, function errorCallback(response) {

  		});
		$scope.getNews = function (category) {
			$location.path( "/"+category+"/news/" );
		}
  		
		

		
		


    }
])
