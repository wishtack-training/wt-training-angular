/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

const assertEqual = (expectedValue, value) => {

    if (expectedValue !== value) {
        throw new Error(`
        Expected:
            ${expectedValue}
        Got:
            ${value}
        `);
    }

};

const testAddUser = () => {

    const userStore = new UserStore();

    const user1 = new User('Foo', 'BAR');
    const user2 = new User('John', 'DOE');
    const user3 = new User('Foo', 'BAR');

    const userListEmpty = userStore.getUserList();

    assertEqual(0, userListEmpty.length);

    userStore.addUser(user1);
    userStore.addUser(user2);
    userStore.addUser(user3);

    const userList = userStore.getUserList();

    assertEqual(3, userList.length);
    assertEqual(user1, userList[0]);
    assertEqual(user2, userList[1]);
    assertEqual(user3, userList[2]);

};

const testRemoveUser = () => {

    const userStore = new UserStore();

    const user1 = new User('Foo', 'BAR');
    const user2 = new User('John', 'DOE');
    const user3 = new User('Foo', 'BAR');

    userStore.addUser(user1);
    userStore.addUser(user2);
    userStore.addUser(user3);

    userStore.removeUser(user1);

    const userList = userStore.getUserList();

    assertEqual(2, userList.length);
    assertEqual(user2, userList[0]);
    assertEqual(user3, userList[1]);

};

testAddUser();
testRemoveUser();
