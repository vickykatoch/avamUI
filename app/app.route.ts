/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />

module avam{
	'use strict';
	angular.module("avam").config(['$stateProvider', '$urlRouterProvider' , 
		function($stateProvider,$urlRouterProvider){
			 $urlRouterProvider.otherwise('/home');
			 $stateProvider.state('home', {
					url: '/home',
					template: '<h1>Home</h1>'
				})
				.state('incomestatement',{
					url: '/home',
					template: '<h1>Income Statement</h1>'
				})
	}]);	
}