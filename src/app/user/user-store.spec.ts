/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { UserStore } from './user-store';
import { User } from './user';


const assert = (expected, value) => {

    if (expected !== value) {
        throw new Error(`Assertion error:
        Expected: 
            ${expected}
        Got:
            ${value}
        `);
    }

};

const userStore = new UserStore();

const user1 = new User('Foo', 'BAR');
const user2 = new User('John', 'DOE');
const user3 = new User('Foo', 'BAR');

const userList1 = userStore.getUserList();

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

const userList2 = userStore.getUserList();

userStore.removeUser(user3);

const userList3 = userStore.getUserList();

userStore.undo();
userStore.undo();
userStore.undo();

const userList4 = userStore.getUserList();

assert(0, userList1.length);

assert(3, userList2.length);
assert(user1, userList2[0]);
assert(user2, userList2[1]);
assert(user3, userList2[2]);

assert(2, userList3.length);
assert(user1, userList3[0]);
assert(user2, userList3[1]);

assert(1, userList4.length);
assert(user1, userList4[0]);

