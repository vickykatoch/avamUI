var avam;
(function (avam) {
    var ui;
    (function (ui) {
        var AvamUIModelController = (function () {
            function AvamUIModelController() {
                this.isMenuVisible = true;
                this.isMenuVertical = true;
                this.isMenuLayoutToggleAllowed = true;
            }
            AvamUIModelController.prototype.contructor = function () {
            };
            return AvamUIModelController;
        })();
        ui.AvamUIModelController = AvamUIModelController;
    })(ui = avam.ui || (avam.ui = {}));
})(avam || (avam = {}));
