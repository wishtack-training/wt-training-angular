"use strict";
/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
exports.__esModule = true;
var user_store_1 = require("./user/user-store");
var user_1 = require("./user/user");
var assert = function (expectedValue, value) {
    if (expectedValue !== value) {
        throw new Error("\n        Expected: \n            " + expectedValue + "\n        Got:\n            " + value + "\n        ");
    }
};
var userStore = new user_store_1.UserStore();
var user1 = new user_1.User('Foo', 'BAR');
var user2 = new user_1.User('John', 'DOE');
var user3 = new user_1.User('Foo', 'BAR');
var userListEmpty = userStore.getUserList();
userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);
var userListFull = userStore.getUserList();
userStore.removeUser(user1);
var userListAfterRemove = userStore.getUserList();
assert(0, userListEmpty.length);
assert(3, userListFull.length);
assert(user1, userListFull[0]);
assert(user2, userListFull[1]);
assert(user3, userListFull[2]);
assert(2, userListAfterRemove.length);
assert(user2, userListAfterRemove[0]);
assert(user3, userListAfterRemove[1]);
