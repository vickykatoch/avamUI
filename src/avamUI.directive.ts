/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./avamUI.controller.ts" />


module avam.ui{
	
	interface IAvamUIAttributes extends ng.IAttributes{
		title:string;
		subTitle:string;
		iconFile:string;
	}
	
	export interface IIAvamUIScope extends ng.IScope {
        vm: IAvamUIControllerModel;
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
		link(scope: IIAvamUIScope, element: ng.IAugmentedJQuery,
            attributes: IAvamUIAttributes, controller: IAvamUIControllerModel): void {
				
			}
	}	
	angular.module("avamUI").directive("avamUi", AvamUIDirective.instance);
}