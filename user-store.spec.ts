/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

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

assert(0, userList1.length);

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

const userList2 = userStore.getUserList();

assert(3, userList2.length);
assert(user1, userList2[0]);
assert(user2, userList2[1]);
assert(user3, userList2[2]);

userStore.removeUser(user3);

const userList3 = userStore.getUserList();

assert(2, userList3.length);
assert(user1, userList3[0]);
assert(user2, userList3[1]);
