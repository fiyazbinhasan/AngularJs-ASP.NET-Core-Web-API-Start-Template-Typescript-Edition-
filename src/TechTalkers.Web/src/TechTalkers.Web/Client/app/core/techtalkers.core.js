var app;
(function (app) {
    var core;
    (function (core_1) {
        var core = angular.module("techtalkers.core", ["ngMaterial", "ngMessages", "material.svgAssetsCache"]);
        core.config(themeConfig);
        themeConfig.$inject = ["$mdThemingProvider"];
        function themeConfig($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('orange').dark();
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=techtalkers.core.js.map