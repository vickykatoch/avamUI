/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIModelController = (function () {
            function AvamUIModelController(scope, rootScope, ngWin, ngTimeout, stateService) {
                var _this = this;
                this.scope = scope;
                this.rootScope = rootScope;
                this.ngWin = ngWin;
                this.ngTimeout = ngTimeout;
                this.stateService = stateService;
                this.isMenuVisible = true;
                this.isMenuButtonVisible = false;
                this.route = "";
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
                this.onRouteChanged();
            }
            AvamUIModelController.prototype.checkWidth = function () {
                var width = Math.max($(this.ngWin).width(), this.ngWin.innerWidth);
                this.isMenuVisible = (width >= 768);
                this.isMenuButtonVisible = !this.isMenuVisible;
            };
            AvamUIModelController.prototype.broadcastMenuState = function () {
                this.rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
                    show: this.isMenuVisible,
                    isVertical: this.isMenuButtonVisible,
                    allowToggle: !this.isMenuButtonVisible
                });
            };
            AvamUIModelController.prototype.onRouteChanged = function () {
                var _this = this;
                this.scope.$on('AVAM-MENU-ITEM-CHANGED', function (evt, data) {
                    _this.route = data.route;
                    _this.stateService.state(_this.route);
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
            };
            AvamUIModelController.$inject = ['$scope', '$rootScope', '$window', '$timeout', ' $state'];
            return AvamUIModelController;
        })();
        ui.AvamUIModelController = AvamUIModelController;
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
