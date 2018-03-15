export abstract class UserSchema {

    firstName?: string;
    lastName?: string;

    constructor(args: UserSchema = {}) {

        this.firstName = args.firstName;
        this.lastName = args.lastName;

    }

}

export class User extends UserSchema {
}

// const data = {
//     firstName: 'Foo',
//     email: 'test@gmail/copm'
// };
//
// let user = new User(data);
//
// user = new User();
//
// user = new User({
//     firstName: 'Foo',
// });
//
// user = new User(user);
