/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./avamUI.controller.ts" />


module avam.ui{
	
	interface IAvamUIAttributes extends ng.IAttributes{
		title:string;
		subTitle:string;
		iconFile:string;
	}
		
	class AvamUIDirective implements ng.IDirective{
		
		static instance() : ng.IDirective{
			return new AvamUIDirective;
		}
		transclude=true;
		scope = {
			title:'@',
			subTitle:'@',
			iconFile:'@'
		};
		controllerAs = 'vm';
		templateUrl = './src/avamUI.template.html';
		controller = AvamUIModelController;
		link(scope: ng.IScope, element: ng.IAugmentedJQuery,
            attributes: IAvamUIAttributes, controller: IAvamUIControllerModel): void {
				
			}
	}	
	angular.module("avamUI").directive("avamUi", AvamUIDirective.instance);
}