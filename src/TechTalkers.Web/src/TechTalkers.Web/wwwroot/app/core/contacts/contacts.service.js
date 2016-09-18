var app;
(function (app) {
    var core;
    (function (core) {
        var contacts;
        (function (contacts) {
            var ContactsService = (function () {
                function ContactsService($http) {
                    this.$http = $http;
                }
                ContactsService.prototype.getContacts = function () {
                    return this.$http.get("/api/contacts")
                        .then(function (response) { return response.data; });
                };
                ContactsService.$inject = ["$http"];
                return ContactsService;
            }());
            contacts.ContactsService = ContactsService;
            angular.module("app.core").service("ContactsService", ContactsService);
        })(contacts = core.contacts || (core.contacts = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=contacts.service.js.map
