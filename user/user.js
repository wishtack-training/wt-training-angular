"use strict";
/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        if (firstName === void 0) { firstName = null; }
        if (lastName === void 0) { lastName = null; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
exports.User = User;
