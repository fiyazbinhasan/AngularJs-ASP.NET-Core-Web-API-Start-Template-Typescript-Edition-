module app.core.about {
    class AboutController {
        text: string;
        image: string;
        twitterUrl: string;
        blogUrl: string;

        static $inject = [];

        constructor() {
            var vm = this;
            vm.text = "Thanks for downloading the template. if you are facing any problem using the template then feel free to contact me in twitter. You can also follow my blog if you want.";
            vm.image = "http://www.fiyazhasan.me/content/images/fizzmonster.png";
            vm.twitterUrl = "https://twitter.com/FiyazBinHasan";
            vm.blogUrl = "http://www.fiyazhasan.me";
        }
    }

    angular
        .module("app.core")
        .controller("AboutController", AboutController);
}
