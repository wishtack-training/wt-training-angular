"use strict";
/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
exports.__esModule = true;
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var UserCurrentStatus;
(function (UserCurrentStatus) {
    UserCurrentStatus["present"] = "present";
    UserCurrentStatus["pause"] = "pause";
    UserCurrentStatus["sleep"] = "\uD83D\uDCA4";
})(UserCurrentStatus || (UserCurrentStatus = {}));
var UserCurrentState = /** @class */ (function () {
    function UserCurrentState() {
        this.status = UserCurrentStatus.sleep;
    }
    return UserCurrentState;
}());
var UserCurrentStore = /** @class */ (function () {
    function UserCurrentStore() {
        this._state$ = new BehaviorSubject_1.BehaviorSubject(new UserCurrentState());
    }
    Object.defineProperty(UserCurrentStore.prototype, "state$", {
        get: function () {
            return this._state$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserCurrentStore.prototype.getStateSnapshot = function () {
        return this._state$.getValue();
    };
    UserCurrentStore.prototype.updateState = function (state) {
        state = Object.assign(this.getStateSnapshot(), state);
        this._state$.next(state);
    };
    return UserCurrentStore;
}());
var userCurrentStore = new UserCurrentStore();
userCurrentStore.state$.subscribe(function (state) {
    console.log(state.status);
});
userCurrentStore.updateState({
    status: UserCurrentStatus.present
});
