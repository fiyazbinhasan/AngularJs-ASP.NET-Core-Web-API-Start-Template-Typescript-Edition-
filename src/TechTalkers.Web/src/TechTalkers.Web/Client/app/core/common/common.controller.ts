module app.core.common {
    class CommonController {
        toggleLeft: any;


        static $inject = ["$timeout", "$mdSidenav", "$log"];

        constructor($timeout: ng.ITimeoutService, $mdSidenav: ng.material.ISidenavService, $log: ng.ILogService) {
            var vm = this;
            vm.toggleLeft = buildDelayedToggler('left');

            function debounce(func, wait, context) {
                var timer;
                return function debounced() {
                    var context = context,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(() => {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            function buildDelayedToggler(navId) {
                return debounce(() => {
                    $mdSidenav(navId)
                        .toggle()
                        .then(() => {
                            $log.debug("toggle " + navId + " is done");
                        });
                }, 200, vm);
            }
        }
    }

    angular
        .module("app.core")
        .controller("CommonController", CommonController);
}
