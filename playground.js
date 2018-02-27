/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
'use strict';
var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = 'Foo';
    }
    Customer.prototype.sayHi = function () {
        console.log(this.firstName);
    };
    Customer.prototype.sayHiLater = function () {
        var _this = this;
        setTimeout(function () {
            _this.sayHi();
        }, 1000);
    };
    return Customer;
}());
var debug = function (data) {
    console.log(data);
};
var customer = new Customer();
customer.sayHi();
customer.sayHiLater();
var productList = [
    {
        name: 'IntelliJ',
        price: 200
    },
    {
        name: 'BrowserStack',
        price: 30
    },
    {
        name: 'Keyboard',
        price: 10
    }
];
var byPrice = function (_a) {
    var _b = _a.min, min = _b === void 0 ? 10 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c;
    return function (product) { return product.price > min && product.price < max; };
};
var cheapProductList = productList
    .filter(byPrice({ max: 37 }));
var cheapProductNameList = cheapProductList
    .map(function (product) { return product.name; });
var totalPrice = cheapProductList
    .map(function (product) { return product.price; })
    .reduce(function (sum, price) { return sum + price; }, 0);
console.log(cheapProductList);
console.log(cheapProductNameList);
console.log(totalPrice);
var ShopAdmin = /** @class */ (function () {
    function ShopAdmin() {
    }
    return ShopAdmin;
}());
var sendMessage = function (messagable) {
    console.log('Hello ' + messagable.email);
};
sendMessage(new Customer());
sendMessage(new ShopAdmin());
sendMessage({
    email: 'foo@wishtack.com'
});
var en = {
    'HELLO': 'Hello',
    'BYE': 'Bye'
};
var fr = {
    'HELLO': 'Bonjour',
    'BYE': 'Au revoir'
};
var foodType;
foodType = 'burger';
