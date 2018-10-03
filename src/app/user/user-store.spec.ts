/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { User } from './user';
import { UserStore } from './user-store';

describe('UserStore', () => {

    let userStore: UserStore;
    let user1: User;
    let user2: User;
    let user3: User;

    beforeEach(() => {

        userStore = new UserStore();

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

    });

    it('should add users', () => {

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        expect(userListEmpty).toEqual([]);

        expect(userStore.getUserList()).toEqual([
            user1,
            user2,
            user3
        ]);

    });

    it('should remove users', () => {

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
