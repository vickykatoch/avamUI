/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./avamUI.controller.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIDirective = (function () {
            function AvamUIDirective() {
                this.transclude = true;
                this.scope = {
                    title: '@',
                    subTitle: '@',
                    iconFile: '@'
                };
                this.controllerAs = 'vm';
                this.templateUrl = './src/avamUI.template.html';
                this.controller = ui.AvamUIModelController;
            }
            AvamUIDirective.instance = function () {
                return new AvamUIDirective;
            };
            AvamUIDirective.prototype.link = function (scope, element, attributes, controller) {
            };
            return AvamUIDirective;
        })();
        angular.module("avamUI").directive("avamUi", AvamUIDirective.instance);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
