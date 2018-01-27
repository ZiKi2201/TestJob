var app = angular.module('helloWorldApp', [
    'ngRoute',
    'ngMaterial',
])

app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/categories.html',
                controller: 'CategoriesCtrl'
            });
    }
]);
