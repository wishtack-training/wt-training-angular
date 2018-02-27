"use strict";
/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
exports.__esModule = true;
var user_store_1 = require("./user-store");
var user_1 = require("./user");
var assertEqual = function (expected, value) {
    if (expected !== value) {
        throw new Error("Assertion error:\n        Expected: " + expected + "\n        Got: " + value + "\n        ");
    }
};
var userStore = new user_store_1.UserStore();
var user1 = new user_1.User('Foo', 'BAR');
var user2 = new user_1.User('John', 'DOE');
var user3 = new user_1.User('Foo', 'BAR');
var userList1 = userStore.getUserList();
userStore.addUser(user1);
userStore.addUser(user2);
userStore.addUser(user3);
var userList2 = userStore.getUserList();
userStore.removeUser(user1);
var userList3 = userStore.getUserList();
assertEqual(0, userList1.length);
assertEqual(3, userList2.length);
assertEqual(user1, userList2[0]);
assertEqual(user2, userList2[1]);
assertEqual(user3, userList2[2]);
assertEqual(2, userList3.length);
assertEqual(user2, userList3[0]);
assertEqual(user3, userList3[1]);
