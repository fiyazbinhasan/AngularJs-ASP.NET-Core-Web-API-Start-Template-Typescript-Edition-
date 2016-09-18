var app;
(function (app) {
    var core;
    (function (core_1) {
        var core = angular.module("app.core", ["ngRoute", "ngMaterial", "ngMessages", "material.svgAssetsCache"]);
        core.config(themeConfig);
        core.config(iconsConfig);
        core.config(routeConfig);
        themeConfig.$inject = ["$mdThemingProvider"];
        iconsConfig.$inject = ["$mdIconProvider"];
        routeConfig.$inject = ["$routeProvider"];
        function themeConfig($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('orange')
                .dark();
        }
        function iconsConfig($mdIconProvider) {
            $mdIconProvider.iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
        }
        function routeConfig($routeProvider) {
            $routeProvider.when("/contacts", {
                templateUrl: "views/contacts.html",
                controller: "ContactsController as vm"
            }).when("/about", {
                templateUrl: "views/about.html",
                controller: "AboutController as vm"
            }).otherwise("/contacts");
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=app.core.js.map