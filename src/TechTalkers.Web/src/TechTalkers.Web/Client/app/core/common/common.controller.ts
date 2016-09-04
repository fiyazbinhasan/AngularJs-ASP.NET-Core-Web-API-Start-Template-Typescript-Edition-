module app.core.common {
    class CommonController {
        toggleLeft: any;
        toggleRight: any;
        isOpenRight: any;
        close: any;


        static $inject = ["$timeout", "$mdSidenav", "$log"];

        constructor($timeout: ng.ITimeoutService, $mdSidenav: ng.material.ISidenavService, $log: ng.ILogService) {
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
            
            function debounce(func, wait, context) {
                var timer;
                return function debounced() {
                    var context = context,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function () {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            function buildDelayedToggler(navID) {
                return debounce(function () {
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }, 200, vm);
            }

            function buildToggler(navID) {
                return function () {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }
            }
        }
    }

    angular
        .module("techtalkers.core")
        .controller("CommonController", CommonController);
}
