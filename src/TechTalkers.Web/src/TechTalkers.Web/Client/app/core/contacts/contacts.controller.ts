module app.core.contacts {
    interface ICharacterListModel {
        title: string;
        contacts: core.domain.IContact[];
    }

    class ContactsController {
        title: string;
        contacts: core.domain.IContact[];

        static $inject = ["ContactsService"];

        constructor(private ContactsService: contacts.ContactsService) {
            var vm = this;
            vm.title = "Toon Contacts";
            ContactsService.getContacts().then(data => this.contacts = data);
        }
    }

    angular
        .module("app.core")
        .controller("ContactsController", ContactsController);
}
