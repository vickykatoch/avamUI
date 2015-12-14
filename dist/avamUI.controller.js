/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIModelController = (function () {
            function AvamUIModelController(scope, rootScope, ngWin, ngTimeout) {
                this.scope = scope;
                this.rootScope = rootScope;
                this.ngWin = ngWin;
                this.ngTimeout = ngTimeout;
                this.isMenuVisible = true;
                this.isMenuVertical = true;
                this.isMenuButtonVisible = false;
                $(window).on('resize.avam', function () {
                    scope.$apply(function () {
                        checkWidth();
                        broadcastMenuState();
                    });
                });
                scope.$on('destroy', function () {
                    $(window).off('resize.avam');
                });
                ngTimeout(function () {
                    checkWidth();
                    broadcastMenuState();
                }, 0);
                var checkWidth = function () {
                    var width = Math.max($(ngWin).width(), ngWin.innerWidth);
                    scope.vm.isMenuVisible = (width >= 768);
                    scope.vm.isMenuButtonVisible = !scope.vm.isMenuVisible;
                };
                var broadcastMenuState = function () {
                    rootScope.$broadcast('AVAM-MENU-VISIBILITY-CHANGED', {
                        show: this.isMenuVisible,
                        isMenuVertical: this.isMenuVertical,
                        allowMenuToggle: !this.isMenuButtonVisible
                    });
                };
            }
            AvamUIModelController.$inject = ['$scope', '$rootScope', '$window', '$timeout'];
            return AvamUIModelController;
        })();
        ui.AvamUIModelController = AvamUIModelController;
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
