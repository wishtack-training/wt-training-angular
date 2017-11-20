/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

class User {

    firstName;
    lastName;

    constructor(firstName = null, lastName = null) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi ${this.firstName} ${this.lastName}`);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }

}

const user = new User('Foo', 'BAR');

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
        name: 'Mouse',
        price: 10
    }
];


const cheapProductNameList = productList
    .filter(product => product.price < 25)
    .map(product => product.name);

const totalPrice = productList
    .filter(product => product.price < 25)
    .map(product => product.price)
    .reduce((total, price) => total + price, 0);

// Immutability.
const productListV2 = productList.map((product) => {

    if (product.price > 25) {
        return product;
    }

    // Shallow copy.
    product = Object.assign({}, product);

    product.price *= 2;
    return product;

});
