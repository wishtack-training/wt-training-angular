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

const userList1 = userStore.getUserList();

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

const userList2 = userStore.getUserList();

userStore.removeUser(user1);

const userList3 = userStore.getUserList();

assertEqual(3, userList2.length);

assertEqual(0, userList1.length);
assertEqual(user1, userList2[0]);
assertEqual(user2, userList2[1]);
assertEqual(user3, userList2[2]);

assertEqual(2, userList3.length);
assertEqual(user2, userList3[0]);
assertEqual(user3, userList3[1]);
