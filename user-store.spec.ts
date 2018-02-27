/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

const assertEqual = (expected, value) => {

    if (expected !== value) {
        throw new Error(`Assertion error:
        Expected: ${expected}
        Got: ${value}
        `);
    }

};

const userStore = new UserStore();

const user1 = new User('Foo', 'BAR');
const user2 = new User('John', 'DOE');
const user3 = new User('Foo', 'BAR');

let userList = userStore.getUserList();

assertEqual(0, userList.length);

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

userList = userStore.getUserList();

assertEqual(3, userList.length);

userStore.removeUser(user1);

userList = userStore.getUserList();

assertEqual(2, userList.length);
