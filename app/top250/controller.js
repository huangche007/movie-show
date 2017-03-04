(function (angular) {
	'use strict';
	//即将上映
	var top250Module = angular.module('myApp.top250Module', ['ngRoute']);

	top250Module.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/top250', {
				templateUrl: 'top250/index.html',
				controller: 'Top250Controller'
			});
		}])

	top250Module.controller('Top250Controller', ['$scope',function($scope) {

	}]);
})(angular);
