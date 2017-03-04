(function (angular) {
	'use strict';
	//即将上映
	var commingSoonModule = angular.module('myApp.commingSoonModule', ['ngRoute']);

	commingSoonModule.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/comming_soon', {
				templateUrl: 'comming_soon/index.html',
				controller: 'CommingSoonController'
			});
		}])

	commingSoonModule.controller('CommingSoonController', ['$scope',function($scope) {

	}]);
})(angular);
