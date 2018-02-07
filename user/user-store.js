"use strict";
exports.__esModule = true;
var UserStore = /** @class */ (function () {
    function UserStore() {
        this._userList = [];
    }
    UserStore.prototype.getUserList = function () {
        return this._userList;
    };
    UserStore.prototype.addUser = function (user) {
        this._userList = this._userList.concat([user]);
    };
    UserStore.prototype.removeUser = function (user) {
        this._userList = this._userList
            .filter(function (_user) { return _user !== user; });
    };
    return UserStore;
}());
exports.UserStore = UserStore;
