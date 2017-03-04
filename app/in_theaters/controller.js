(function (angular) {
	'use strict';
	//正在热映
	var threathersModule = angular.module('myApp.threathersModule', ['ngRoute','myApp.services.HttpServiceModule']);

	threathersModule.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/in_theaters/:page', {
				templateUrl: 'in_theaters/index.html',
				controller: 'InTheathersController'
			});
		}])

	threathersModule.controller('InTheathersController',
		['$scope',
		 '$http',
		'$routeParams',
		'$route',
		'HttpService',
		function($scope,$http,$routeParams,$route,HttpService) {
		var count = 5;//每页显示5条数据
		var page = $routeParams.page==''? 1:parseInt($routeParams.page);
		$scope.start = parseInt((page - 1)*count);
		$scope.totalCount = 0;
		$scope.totalPage = 	0;
		$scope.currentPage = parseInt($routeParams.page);
		$scope.subjects = [];
		$scope.message = '';
		$scope.loading = true;
		HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters',{start:$scope.start,count:count}, function (data) {
			$scope.subjects = data.subjects;
			$scope.loading = false;
			$scope.totalCount = data.total;
			$scope.totalPage =parseInt(Math.ceil($scope.totalCount/count));
			$scope.$apply();//该方法的作用就是让指定的表达式重新同步
		});
			$scope.go = function (page) {
				console.log(page);
				if(page<=$scope.totalPage && page>=1)
					$route.updateParams({page:page});
			};
		}]);



})(angular);
//$http.get('../app/data.json')
//	.then(function (res) {//成功回调
//		if(res.status == 200){
//			$scope.subjects = res.data.subjects;
//		}else {
//			$scope.message = "获取数据失败";
//		}
//	})
//	.then(function (err) {
//		$scope.message = "获取数据失败";
//	});
//
