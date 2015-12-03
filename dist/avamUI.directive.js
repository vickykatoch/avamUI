/// <reference path="../typings/angularjs/angular.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUiDirective = (function () {
            function AvamUiDirective() {
                this.replace = true;
                this.transclude = false;
                this.scope = {};
                this.template = "<h1>Hi There</h1>";
            }
            AvamUiDirective.instance = function () {
                return new AvamUiDirective;
            };
            return AvamUiDirective;
        })();
        angular.module("avamUi").directive("avamUi", AvamUiDirective.instance);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
