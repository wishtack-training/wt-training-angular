'use strict';
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        if (firstName === void 0) { firstName = null; }
        if (lastName === void 0) { lastName = null; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.sayHi = function () {
        console.log("Hi " + this.firstName + " " + this.lastName);
    };
    User.prototype.sayHiLater = function () {
        var _this = this;
        setTimeout(function () { return _this.sayHi(); }, 1000);
    };
    return User;
}());
exports.User = User;
var productList = [
    {
        name: 'IntelliJ',
        price: 20
    },
    {
        name: 'BrowserStack',
        price: 30
    },
    {
        name: 'Angular',
        price: 0
    }
];
var cheapProductNameList = productList
    .filter(function (product) { return product.price < 25; })
    .map(function (product) { return product.name; });
var totalPrice = productList
    .map(function (product) { return product.price; })
    .reduce(function (sum, price) { return sum + price; }, 0);
console.log(cheapProductNameList);
console.log(totalPrice);
var itemList = ['a', 'b', 'c'];
console.log(itemList.length);
var _loop_1 = function (i) {
    var index = i;
    setTimeout(function () { return console.log(itemList[index]); }, parseInt(i) * 1000);
};
for (var i in itemList) {
    _loop_1(i);
}
setTimeout(function () {
    itemList[0] = 'x';
    itemList[1] = 'y';
    itemList[2] = 'z';
}, 300);
