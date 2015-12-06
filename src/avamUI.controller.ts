/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

module avam.ui{
	export interface IAvamUIControllerModel{
		isMenuVisible:boolean;
		isMenuVertical:boolean;
		isMenuButtonVisible:boolean;
	}
	
	
	
	export class AvamUIModelController implements IAvamUIControllerModel{
		isMenuVisible:boolean=true;
		isMenuVertical:boolean=true;
		isMenuButtonVisible:boolean=false;
		
		static $inject =['$scope', '$rootScope', '$window','$timeout'];
		constructor(private scope : IIAvamUIScope, private rootScope: ng.IRootScopeService, 
				private ngWin : ng.IWindowService, private ngTimeout : ng.ITimeoutService){
			$(window).on('resize.avam', function(){
				scope.$apply(function(){
					checkWidth();
					this.broadcastMenuState();
				})
			});
			scope.$on('destroy', function(){
				$(window).off('resize.avam');
			});
			
			ngTimeout(function(){
				checkWidth();
				broadcastMenuState();
			},0);
			
			var checkWidth= function(){
				var width = Math.max($(ngWin).width(), ngWin.innerWidth);
				scope.vm.isMenuVisible = (width >= 768);
                scope.vm.isMenuButtonVisible = !scope.vm.isMenuVisible;
			}
			var broadcastMenuState = function(){
				rootScope.$broadcast('avam-menu-visible', {
					show: scope.vm.isMenuVisible
				});
			}
			
		}
		
		
		private broadcastMenuState():void{
			this.rootScope.$broadcast('avam-menu-visible',{
				show : this.isMenuVisible
			});
		}
		
	}
}