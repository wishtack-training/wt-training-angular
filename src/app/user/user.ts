
export class UserSchema {

    id?: string;
    firstName?: string;
    lastName?: string;

    constructor(args: UserSchema = {}) {
        this.id = args.id;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}

export class User extends UserSchema {
}
