export class User {

    firstName?: string;
    lastName?: string;

    constructor(args: User = {}) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}
