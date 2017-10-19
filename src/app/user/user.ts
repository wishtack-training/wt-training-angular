
export class User {

    firstName: string;
    lastName: string;

    constructor({firstName = null, lastName = null} = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

