/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { UserStore } from './user-store';
import { User } from '../user/user';

describe('UserStore', () => {

    let userStore: UserStore;
    let user1: User;
    let user2: User;
    let user3: User;

    beforeEach(() => {

        user1 = new User({
            firstName: 'Foo',
            lastName: 'BAR'
        });
        user2 = new User({
            firstName: 'John',
            lastName: 'DOE'
        });
        user3 = new User({
            firstName: 'Foo',
            lastName: 'BAR'
        });

        userStore = new UserStore();

    });

    it('should add users', () => {

        userStore.addUser(user1);
        userStore.addUser(user2);

        expect(userStore.getUserList()).toEqual([
            user1,
            user2
        ]);

    });

    it('should remove users', () => {

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        const userList = userStore.getUserList();

        userStore.removeUser(user3);

        /* Checking that userList immutability is respected. */
        expect(userList).toEqual([
            user1,
            user2,
            user3
        ]);

        expect(userStore.getUserList()).toEqual([
            user1,
            user2
        ]);

    });

    xit('should undo', () => {

    });

});

