class UserStore {

    addUser(user: User) {
        throw new Error('😱 Not implemented yet!');
    }

    getUserList() {
        throw new Error('😱 Not implemented yet!');
    }

    removeUser(user1: User) {
        throw new Error('😱 Not implemented yet!');
    }

}

class User {
    constructor(firstName: string, lastName: string) {
        throw new Error('😱 Not implemented yet!');
    }
}

/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

describe('UserStore', () => {

    let userStore: UserStore;
    let user1: User;
    let user2: User;
    let user3: User;

    beforeEach(() => {

        userStore = new UserStore();

        user1 = new User('Foo', 'BAR');
        user2 = new User('John', 'DOE');
        user3 = new User('Foo', 'BAR');

    });

    xit('should add users', () => {

        const userList = userStore.getUserList();

        expect(userList).toEqual([]);

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        expect(userStore.getUserList()).toEqual([
            user1,
            user2,
            user3
        ]);

    });

    xit('should remove users', () => {

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.removeUser(user1);

        expect(userStore.getUserList()).toEqual([
            user2,
            user3
        ]);


    });

});
