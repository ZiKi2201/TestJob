var app = angular.module('helloWorldApp', [
    'ngRoute',
    'ngMaterial',
])

app.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider

            .when('/:id/news', {
                templateUrl: 'views/news.html',
                controller: 'NewsCtrl'
            })
            .when('/details/:id', {
				templateUrl: 'views/detailsNews.html',
				controller: 'DetailsCtrl'
            });

    }
]);
