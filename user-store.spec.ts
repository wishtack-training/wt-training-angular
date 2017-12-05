/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

const assert = (expected, value) => {

    if (value !== expected) {
        throw new Error(`Assertion error:
        Got:
            ${value}
        Expected:
            ${expected}
        `);
    }

};

const test = () => {

    const userStore = new UserStore();

    const user1 = new User('Foo', 'BAR');
    const user2 = new User('John', 'DOE');
    const user3 = new User('Foo', 'BAR');

    const userListEmpty = userStore.getUserList();

    assert(0, userListEmpty.length);

    userStore.addUser(user1);
    userStore.addUser(user2);
    userStore.addUser(user3);

    const userListFull = userStore.getUserList();

    assert(3, userListFull.length);
    assert(user1, userListFull[0]);
    assert(user2, userListFull[1]);
    assert(user3, userListFull[2]);

    userStore.removeUser(user3);

    const userListCleanUp = userStore.getUserList();

    assert(2, userListCleanUp.length);
    assert(user1, userListFull[0]);
    assert(user2, userListFull[1]);


};

test();
