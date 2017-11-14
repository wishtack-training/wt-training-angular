/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from './user';
import { UserStore } from './user-store';


const assert = (value, expectedValue) => {

    if (value === expectedValue) {
        return;
    }

    throw new Error(`
    Assertion error:
        Expected: ${expectedValue}
        Got: ${value}
    `);

};

const user1 = new User('Foo', 'BAR');
const user2 = new User('John', 'DOE');
const user3 = new User('Foo', 'BAR');

const userStore = new UserStore();

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

assert(userList1.length, 0);

assert(userList2.length, 3);
assert(userList2[0], user1);
assert(userList2[1], user2);
assert(userList2[2], user3);

assert(userList3.length, 2);
assert(userList3[0], user1);
assert(userList3[1], user2);

assert(userList4.length, 1);
assert(userList4[0], user1);
