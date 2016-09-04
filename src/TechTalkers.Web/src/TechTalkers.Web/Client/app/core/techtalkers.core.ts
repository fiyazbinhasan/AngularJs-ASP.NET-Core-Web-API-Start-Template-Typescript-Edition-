module app.core {
    var core = angular.module("techtalkers.core", ["ngMaterial", "ngMessages", "material.svgAssetsCache"]);

    core.config(themeConfig);

    themeConfig.$inject = ["$mdThemingProvider"];

    function themeConfig($mdThemingProvider: ng.material.IThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange').dark()
    }
}