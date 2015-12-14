/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

module avam.ui{
		
	export interface IAvamUIControllerModel{
		isMenuVisible:boolean;
		isMenuButtonVisible:boolean;
		route:string;
		onRouteChanged():void;
		onOrientationChange(): void;
		toggleMenu():void;
		
	}
	export interface IIAvamUIScope extends ng.IScope {
        vm: IAvamUIControllerModel;
    }
	
	
	
	export class AvamUIModelController implements IAvamUIControllerModel{
		isMenuVisible:boolean=true;
		isMenuButtonVisible:boolean=false;
		route:string="";
		
		static $inject =['$scope', '$rootScope', '$window','$timeout',' $state'];
		constructor(private scope : IIAvamUIScope, private rootScope: ng.IRootScopeService, 
					private ngWin : ng.IWindowService, private ngTimeout : ng.ITimeoutService,
					private stateService: ng.ui.IStateService){
			$(window).on('resize.avam',(evt: JQueryEventObject, args:any[]):any=>
			{
				this.scope.$apply(()=>{
					this.checkWidth();
					this.broadcastMenuState();
				})
			});
			
			
			scope.$on('destroy', function(){
				$(window).off('resize.avam');
			});
			
			ngTimeout(():any=>{
				this.checkWidth();
				this.broadcastMenuState();
			},0);
			this.onRouteChanged();
		}
		checkWidth():void{
			var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
			this.isMenuVisible= (width >= 768);
			this.isMenuButtonVisible=!this.isMenuVisible;
		}
		broadcastMenuState():void {
			this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
				show: this.isMenuVisible,
				isVertical : this.isMenuButtonVisible,
				allowToggle : !this.isMenuButtonVisible
			});
		}
		
		
		onRouteChanged():void{
			this.scope.$on('AVAM-MENU-ITEM-CHANGED',  (evt: ng.IAngularEvent,  data:any):void=>{
				this.route=data.route;
			    this.stateService.state(this.route);
			});
		}
		onOrientationChange(): void{
			this.scope.$on('AVAM-MENU-ORIENTATION-CHANGED',  (evt: ng.IAngularEvent,  data:any):void=>{
				//this.isMenuVertical=data.isVertical;
			});
		}
		toggleMenu():void{
			this.isMenuVisible= !this.isMenuVisible;
			this.broadcastMenuState();
		}
	}
}