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
                    vm.toggleRight = buildToggler('right');
                    vm.isOpenRight = function () {
                        return $mdSidenav('right').isOpen();
                    };
                    vm.close = function () {
                        // Component lookup should always be available since we are not using `ng-if`
                        $mdSidenav('left').close()
                            .then(function () {
                            $log.debug("close LEFT is done");
                        });
                    };
                    /**
                    * @param {Function} func
                    * @param {number} wait
                    * @param {Object} context
                    * @returns The debounced function.
                    */
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
                    /**
                    * @param {string} navID
                    * @returns The debounced function.
                    */
                    function buildDelayedToggler(navID) {
                        return debounce(function () {
                            $mdSidenav(navID)
                                .toggle()
                                .then(function () {
                                $log.debug("toggle " + navID + " is done");
                            });
                        }, 200, vm);
                    }
                    /**
                    * @param {string} navID
                    * @returns The sidenac service.
                    */
                    function buildToggler(navID) {
                        return function () {
                            // Component lookup should always be available since we are not using `ng-if`
                            $mdSidenav(navID)
                                .toggle()
                                .then(function () {
                                $log.debug("toggle " + navID + " is done");
                            });
                        };
                    }
                }
                CommonController.$inject = ["$timeout", "$mdSidenav", "$log"];
                return CommonController;
            }());
            angular
                .module("techtalkers.core")
                .controller("CommonController", CommonController);
        })(common = core.common || (core.common = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=common.controller.js.map
