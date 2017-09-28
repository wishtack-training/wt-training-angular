/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { UserStore } from './user-store';
import { User } from './user';

const assert = (value, message = 'no message') => {

    if (!value) {
        throw new Error(`Error ${message}. Value: ${value}.`);
    }

};


const userStore = new UserStore();

const user1 = new User({
    firstName: 'Foo',
    lastName: 'BAR'
});
const user2 = new User({
    firstName: 'John',
    lastName: 'DOE'
});
const user3 = new User({
    firstName: 'Foo',
    lastName: 'BAR'
});

const userList1 = userStore.getUserList();

userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);

const userList2 = userStore.getUserList();

userStore.removeUser(user1);

const userList3 = userStore.getUserList();

userStore.undo();

const userList4 = userStore.getUserList();

userStore.undo();

const userList5 = userStore.getUserList();

userStore.undo();

const userList6 = userStore.getUserList();


assert(userList1.length === 0);

assert(userList2.length === 3);
assert(userList2[0] === user1);
assert(userList2[1] === user2);
assert(userList2[2] === user3);

assert(userList3.length === 2);
assert(userList3[0] === user2);
assert(userList3[1] === user3);

assert(userList4.length === 3);
assert(userList5.length === 2);
assert(userList6.length === 1);
