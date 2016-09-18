var app;
(function (app) {
    var core;
    (function (core) {
        var domain;
        (function (domain) {
            var Contact = (function () {
                function Contact(id, name, number, image) {
                    this.id = id;
                    this.name = name;
                    this.number = number;
                    this.image = image;
                }
                return Contact;
            }());
            domain.Contact = Contact;
        })(domain = core.domain || (core.domain = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=contact.js.map
