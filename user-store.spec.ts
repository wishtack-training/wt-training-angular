/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

const assert = (value1, value2) => {

    if (value1 === value2) {
        return;
    }

    throw new Error(`Assertion error: ${value1} !== ${value2}`);

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

assert(userList1.length, 0);

assert(userList2.length, 3);
assert(userList2[0], user1);
assert(userList2[1], user2);
assert(userList2[2], user3);

assert(userList3.length, 2);
assert(userList3[0], user1);
assert(userList3[1], user2);


