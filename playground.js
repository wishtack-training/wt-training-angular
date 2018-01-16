/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

class Customer {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = undefined;
    }

    sayHi() {
        console.log(`Hello ${this.firstName}!`);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }

}

const customer = new Customer('Foo');

customer.sayHiLater();

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
        name: 'Poker Keyboard',
        price: 160
    }
];

const cheapProductNameList = productList
    .filter(product => product.price < 100)
    .map(product => product.name);

const totalPrice = productList
    .filter(product => product.price < 100)
    .reduce((sum, product) => sum + product.price, 0 /* Initial value. */);

console.log(cheapProductNameList);
console.log(totalPrice);
