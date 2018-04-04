export class UserSchema {

    firstName?: string;
    lastName?: string;

    constructor(args: UserSchema = {}) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}

export class User extends UserSchema {
}
