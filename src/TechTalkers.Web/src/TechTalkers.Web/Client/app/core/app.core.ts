module app.core {
    var core = angular.module("app.core", ["ngRoute", "ngMaterial", "ngMessages", "material.svgAssetsCache"]);

    core.config(themeConfig);
    core.config(iconsConfig);
    core.config(routeConfig);

    themeConfig.$inject = ["$mdThemingProvider"];
    iconsConfig.$inject = ["$mdIconProvider"];
    routeConfig.$inject = ["$routeProvider"];

    function themeConfig($mdThemingProvider: ng.material.IThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange')
            .dark();
    }

    function iconsConfig($mdIconProvider: ng.material.IIconProvider) {
        $mdIconProvider.iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
    }

    function routeConfig($routeProvider: ng.route.IRouteProvider){
        $routeProvider.when("/contacts",{
            templateUrl: "views/contacts.html",
            controller: "ContactsController as vm"
        }).when("/about",{
            templateUrl: "views/about.html",
            controller: "AboutController as vm"
        }).otherwise("/contacts");
    }
}