/// <reference path="../typings/angularjs/angular.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIDirective = (function () {
            function AvamUIDirective() {
                this.transclude = true;
                this.scope = {};
                this.templateUrl = './src/avamUI.template.html';
            }
            AvamUIDirective.instance = function () {
                return new AvamUIDirective;
            };
            return AvamUIDirective;
        })();
        angular.module("avamUI").directive("avamUi", AvamUIDirective.instance);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
