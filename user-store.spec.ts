/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

const assert = (value, expectedValue) => {

    if (value !== expectedValue) {
        throw new Error(`Assertion error:
    Got:
        ${value}
    Expecting:
        ${expectedValue}
        `);
    }

};

const userStore = new UserStore();

const user1 = new User('Foo', 'BAR');
const user2 = new User('John', 'DOE');
const user3 = new User('Foo', 'BAR');

const userList1 = userStore.getUserList();

assert(userList1.length, 0);

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

const userList2 = userStore.getUserList();

assert(userList2.length, 3);
assert(userList2[0], user1);
assert(userList2[1], user2);
assert(userList2[2], user3);

userStore.removeUser(user3);

const userList3 = userStore.getUserList();

assert(userList3.length, 2);
assert(userList3[0], user1);
assert(userList3[1], user2);
