/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { User } from './user';
import { UserStore } from './user-store';


describe('UserStore', () => {

    xit('should add users', () => {

        const userStore = new UserStore();

        const user1 = new User('Foo', 'BAR');
        const user2 = new User('John', 'DOE');
        const user3 = new User('Foo', 'BAR');

        // @TODO
        // expect(userStore.getUserList()).toEqual([]);
        //
        // userStore.addUser(user1);
        // userStore.addUser(user2);
        // userStore.addUser(user3);
        //
        // expect(userStore.getUserList()).toEqual([
        //     user1,
        //     user2,
        //     user3
        // ]);

    });

    xit('should remove users', () => {

        const userStore = new UserStore();

        const user1 = new User('Foo', 'BAR');
        const user2 = new User('John', 'DOE');
        const user3 = new User('Foo', 'BAR');

        // @TODO
        // userStore.addUser(user1);
        // userStore.addUser(user2);
        // userStore.addUser(user3);
        //
        // userStore.removeUser(user1);
        //
        // expect(userStore.getUserList()).toEqual([
        //     user2,
        //     user3
        // ]);

    });

});
