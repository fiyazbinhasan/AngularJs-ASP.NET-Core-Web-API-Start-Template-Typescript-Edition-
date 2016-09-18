var app;
(function (app) {
    var core;
    (function (core) {
        var contacts;
        (function (contacts) {
            var ContactsController = (function () {
                function ContactsController(ContactsService) {
                    var _this = this;
                    this.ContactsService = ContactsService;
                    var vm = this;
                    vm.title = "Toon Contacts";
                    ContactsService.getContacts().then(function (data) { return _this.contacts = data; });
                }
                ContactsController.$inject = ["ContactsService"];
                return ContactsController;
            }());
            angular
                .module("app.core")
                .controller("ContactsController", ContactsController);
        })(contacts = core.contacts || (core.contacts = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=contacts.controller.js.map
