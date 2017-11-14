'use strict';

class User {

    constructor(firstName, lastName = null) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi ${this.firstName} ${this.lastName}`);
    }

    sayHiLater() {
        setTimeout(() => this.sayHi(), 1000);
    }
}

const productList = [
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

// Polyfill
if (Array.prototype.digest == null) {
    // Shim
    Array.prototype.digest = function () {
        return '💩';
    };
}


const cheapProductNameList = productList
    .filter(product => product.price < 25)
    .map(product => product.name)
    .digest();

const totalPrice = productList
    .map(product => product.price)
    .reduce((sum, price) => sum + price, 0);

console.log(cheapProductNameList);
console.log(totalPrice);
