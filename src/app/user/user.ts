export class User {

    id?: string;
    firstName?: string;
    lastName?: string;

    constructor(args: User = {}) {
        this.id = args.id;

        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}
