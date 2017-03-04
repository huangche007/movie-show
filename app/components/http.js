/**
 * Created by hc on 2017/3/3.
 */
(function (angular) {
	"use strict";
	var httpSrvice = angular.module('myApp.services.HttpServiceModule',[]);
	httpSrvice.service('HttpService',['$document','$window',function ($document,$window) {
		this.jsonp = function (url,data,callback) {
			//将data对象转换为字符串追加到url上
			var jueryStr = url.indexOf('?') ? '?' : '&';

			//挂载回调函数
			var funCallName = "jsonpCallBack"+Math.random().toString().replace('.','');
			$window[funCallName] = callback;
			//data = {name:huangche,age:22}
			for(var key in data){
				jueryStr+=key+"="+data[key]+"&";
			}

			//将回调追加到url上
			jueryStr+="callback="+funCallName;
			//jueryStr = ?name:huangche&age:22&callback=jsonpCallBacki08032423235345
			//创建一个script标签
			var scriptElem =  $document[0].createElement("script");
			scriptElem.src = url+jueryStr;

			//将script标签放在html中
			$document[0].body.appendChild(scriptElem);
		};
	}]);
})(angular);
