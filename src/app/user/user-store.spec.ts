/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { UserStore } from './user-store';
import { User } from './user';


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

    it('should add users', () => {

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        const userListFull = userStore.getUserList();

        expect(userListEmpty).toEqual([]);
        expect(userListFull).toEqual([
            user1,
            user2,
            user3
        ]);

    });

    it('should remove user', () => {

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.removeUser(user3);

        const userList = userStore.getUserList();

        expect(userListEmpty).toEqual([]);

        expect(userList).toEqual([
            user1,
            user2
        ]);

    });

    it('should update user', () => {

        const userListEmpty = userStore.getUserList();

        const user = new User('Foo', 'Foo');

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.updateUser(user1, user);

        const userList = userStore.getUserList();

        expect(userListEmpty).toEqual([]);

        expect(userList).toEqual([
            user,
            user2,
            user3
        ]);

    });

    it('should undo', () => {

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);

        userStore.removeUser(user2);

        userStore.updateUser(user1, user3);

        userStore.undo();
        userStore.undo();
        userStore.undo();

        const userList = userStore.getUserList();

        expect(userListEmpty).toEqual([]);
        expect(userList).toEqual([
            user1
        ]);

    });


});



