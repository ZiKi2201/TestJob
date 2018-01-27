app.controller('CategoriesCtrl', [
    '$scope', '$http', '$mdDialog',
    function($scope, $http, $mdDialog) {
       
        $http({
  			method: 'GET',
  			url: 'http://testtask.sebbia.com/v1/news/categories'
		}).then(function successCallback(response) {
    		console.log(response)
    		$scope.categories = response.data;

  		}, function errorCallback(response) {

  		});

  		showAdvanced = function(ev, res) {
			$mdDialog.show({
				controller: 'CategoriesCtrl',
		    	templateUrl: 'models/dialog.html',
		    	parent: angular.element(document.body),
		    	targetEvent: ev,
		    	clickOutsideToClose:true,
		    	fullscreen: $scope.customFullscreen
		    })
		    .then(function(answer) {
		    	$scope.status = 'You said the information was "' + answer + '".';
		    }, function() {
		    	$scope.status = 'You cancelled the dialog.';
		    });
		  };

		$scope.clickCategory = function (category) {
			console.log(category)
			$http({
				method: 'GET',
  				url: 'http://testtask.sebbia.com/v1/news/categories/'+category.id+'/news'
			}).then(function successCallback(response) {
				console.log(response)
				$scope.news = response.data

			},function errorCallback(response) {

  			});
		}


		$scope.clickNew = function (currentNew, ev) {
  			console.log(currentNew)
  			$http({
				method: 'GET',
  				url: 'http://testtask.sebbia.com/v1/news/details?id='+currentNew.id+''
			}).then(function successCallback(response) {
				console.log(response)
				
				showAdvanced(ev, response.data.news)

			},function errorCallback(response) {

  			});
  		}

    }
]);
