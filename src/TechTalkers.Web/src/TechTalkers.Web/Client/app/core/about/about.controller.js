var app;
(function (app) {
    var core;
    (function (core) {
        var about;
        (function (about) {
            var AboutController = (function () {
                function AboutController() {
                    var vm = this;
                    vm.text = "Thanks for downloading the template. if you are facing any problem using the template then feel free to contact me in twitter. You can also follow my blog if you want.";
                    vm.image = "http://www.fiyazhasan.me/content/images/fizzmonster.png";
                    vm.twitterUrl = "https://twitter.com/FiyazBinHasan";
                    vm.blogUrl = "http://www.fiyazhasan.me";
                }
                AboutController.$inject = [];
                return AboutController;
            }());
            angular
                .module("app.core")
                .controller("AboutController", AboutController);
        })(about = core.about || (core.about = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=about.controller.js.map