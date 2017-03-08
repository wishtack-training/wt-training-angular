/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

export class UserSchema {

    id?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    email?: string;

    constructor(args: UserSchema = {}) {
        this.id = args.id;
        this.address = args.address;
        this.email = args.email;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

}

export class User extends UserSchema {

}
