var app;
(function (app) {
    var core;
    (function (core) {
        var common;
        (function (common) {
            var CommonController = (function () {
                function CommonController($timeout, $mdSidenav, $log) {
                    var vm = this;
                    vm.toggleLeft = buildDelayedToggler('left');
                    function debounce(func, wait, context) {
                        var timer;
                        return function debounced() {
                            var context = context, args = Array.prototype.slice.call(arguments);
                            $timeout.cancel(timer);
                            timer = $timeout(function () {
                                timer = undefined;
                                func.apply(context, args);
                            }, wait || 10);
                        };
                    }
                    function buildDelayedToggler(navId) {
                        return debounce(function () {
                            $mdSidenav(navId)
                                .toggle()
                                .then(function () {
                                $log.debug("toggle " + navId + " is done");
                            });
                        }, 200, vm);
                    }
                }
                CommonController.$inject = ["$timeout", "$mdSidenav", "$log"];
                return CommonController;
            }());
            angular
                .module("app.core")
                .controller("CommonController", CommonController);
        })(common = core.common || (core.common = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=common.controller.js.map
