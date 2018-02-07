'use strict';
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'Foo';
    }
    Person.prototype.sayHi = function () {
        console.log(this.firstName);
    };
    Person.prototype.sayHiLater = function () {
        var _this = this;
        setTimeout(function () { return _this.sayHi(); }, 1000);
    };
    return Person;
}());
var person = new Person();
person.sayHi();
person.sayHiLater();
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Administrator = /** @class */ (function () {
    function Administrator() {
    }
    return Administrator;
}());
var sendEmail = function (emailable) {
};
sendEmail({
    firstName: 'foo',
    email: 'test'
});
sendEmail(new User());
sendEmail(new Administrator());
var productList = [
    {
        name: 'IntelliJ',
        price: 100
    },
    {
        name: 'VSCode',
        price: 5
    },
    {
        name: 'Keyboard',
        price: 20
    }
];
var cheapProductNameList = productList
    .filter(function (product) { return product.price < 30; })
    .map(function (product) { return product.name; });
console.log(productList);
console.log(cheapProductNameList);
