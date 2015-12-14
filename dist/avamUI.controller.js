/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIModelController = (function () {
            function AvamUIModelController(scope, rootScope, ngWin, ngTimeout) {
                var _this = this;
                this.scope = scope;
                this.rootScope = rootScope;
                this.ngWin = ngWin;
                this.ngTimeout = ngTimeout;
                this.isMenuVisible = true;
                this.isMenuButtonVisible = false;
                this.route = "";
                // $(window).on('resize.avam', function(){
                // 	this.scope.$apply(function(){
                // 		this.checkWidth();
                // 		this.broadcastMenuState();
                // 	})
                // });
                $(window).on('resize.avam', function (evt, args) {
                    _this.scope.$apply(function () {
                        _this.checkWidth();
                        _this.broadcastMenuState();
                    });
                });
                scope.$on('destroy', function () {
                    $(window).off('resize.avam');
                });
                ngTimeout(function () {
                    _this.checkWidth();
                    _this.broadcastMenuState();
                }, 0);
                // ngTimeout(function(){
                // 	this.checkWidth();
                // 	this.broadcastMenuState();
                // },0);
                // var checkWidth= function(){
                // 	var width = Math.max($(ngWin).width(), ngWin.innerWidth);
                // 	scope.vm.isMenuVisible = (width >= 768);
                //     scope.vm.isMenuButtonVisible = !scope.vm.isMenuVisible;
                // }
                // var broadcastMenuState = function(){
                // 	rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
                // 		show: scope.vm.isMenuVisible,
                // 	});
                // }
            }
            AvamUIModelController.prototype.checkWidth = function () {
                var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
                this.isMenuVisible = (width >= 768);
                this.isMenuButtonVisible = !this.isMenuVisible;
            };
            AvamUIModelController.prototype.broadcastMenuState = function () {
                this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
                    show: this.isMenuVisible
                });
            };
            AvamUIModelController.prototype.onRouteChanged = function () {
                var _this = this;
                this.scope.$on('AVAM-MENU-ITEM-CHANGED', function (evt, data) {
                    _this.route = data.route;
                });
            };
            AvamUIModelController.prototype.onOrientationChange = function () {
                this.scope.$on('AVAM-MENU-ORIENTATION-CHANGED', function (evt, data) {
                    //this.isMenuVertical=data.isVertical;
                });
            };
            AvamUIModelController.prototype.toggleMenu = function () {
                this.isMenuVisible = !this.isMenuVisible;
                this.broadcastMenuState();
                this.scope.$apply();
            };
            AvamUIModelController.$inject = ['$scope', '$rootScope', '$window', '$timeout'];
            return AvamUIModelController;
        })();
        ui.AvamUIModelController = AvamUIModelController;
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
