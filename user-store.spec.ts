/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

const assertEqual = (expectedValue, value) => {

    if (value !== expectedValue) {
        throw new Error(`Assertion error:
        Expected: ${expectedValue}
        Got: ${value}
        `);
    }

};

const user1 = new User('Foo', 'BAR');
const user2 = new User('John', 'DOE');
const user3 = new User('Foo', 'BAR');

const userList1 = userStore.getUserList();

assertEqual(0, userList1.length);

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

const userList2 = userStore.getUserList();

assertEqual(3, userList2.length);
assertEqual(user1, userList2[0]);
assertEqual(user2, userList2[1]);
assertEqual(user3, userList2[2]);

userStore.removeUser(user3);

const userList3 = userStore.getUserList();
assertEqual(2, userList3.length);
assertEqual(user1, userList2[0]);
assertEqual(user2, userList2[1]);
