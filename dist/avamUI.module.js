/// <reference path="../typings/angularjs/angular.d.ts" />
var avam;
(function (avam) {
    var ui;
    (function (ui) {
        'use strict';
        angular.module("avamUI", ["avam-menu"]);
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
