export class UserSchema {

    firstName?: string;
    lastName?: string;

    constructor(args: UserSchema = {}) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}

export class User extends UserSchema {

    name: string;

    constructor(args?: UserSchema) {
        super(args);

        /* @HACK: Avoid this. It's just a demo :) */
        this.name = `${this.firstName} ${this.lastName}`;

    }

}
