/// <reference path="../typings/angularjs/angular.d.ts" />

module avam.ui{
	class AvamUiDirective implements ng.IDirective{
		static instance() : ng.IDirective{
			return new AvamUiDirective;
		}
		replace = true;
		transclude=false;
		scope = {
		};
		template="<h1>Hi There</h1>";
	}	
	angular.module("avamUi").directive("avamUi", AvamUiDirective.instance);
}