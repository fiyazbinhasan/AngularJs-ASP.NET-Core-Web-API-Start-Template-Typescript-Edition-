module app.core.domain {
    export interface IContact {
        id: number;
        name: string;
        number: string,
        image: string
    }

    export class Contact implements IContact {
        constructor(
            public id:number,
            public name: string,
            public number: string,
            public image: string) {
        }
    }
}