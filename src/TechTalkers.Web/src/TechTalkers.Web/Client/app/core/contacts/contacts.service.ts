module app.core.contacts {
    interface IContactsService {
        getContacts(): ng.IPromise<core.domain.IContact[]>;
    }

    export class ContactsService implements IContactsService {
        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {

        }

        getContacts(): ng.IPromise<core.domain.IContact[]> {
            return this.$http.get("/api/contacts")
                .then((response: any): ng.IPromise<core.domain.IContact[]> => response.data);
        }
    }

    angular.module("app.core").service("ContactsService", ContactsService);
}