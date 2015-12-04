/// <reference path="../typings/angularjs/angular.d.ts" />

module avam.ui{
	
	
	
	
	class AvamUIDirective implements ng.IDirective{
		
		static instance() : ng.IDirective{
			return new AvamUIDirective;
		}
		transclude=true;
		scope = {
		};
		templateUrl = './src/avamUI.template.html';
	}	
	angular.module("avamUI").directive("avamUi", AvamUIDirective.instance);
}