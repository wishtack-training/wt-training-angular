/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

class User {

    firstName: string;
    email: string;

    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHi() {
        return console.log(`Hello ${this._getName()}!`);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }

    private _getName() {
        return this.firstName;
    }

}

let productList = [
    {
        name: 'IntelliJ',
        price: 20
    },
    {
        name: 'BrowserStack',
        price: 30
    },
    {
        name: 'VSCode',
        price: 5
    }
];

const getCheapProductsTotalPrice = (maxPrice) => {
    return productList
        .filter(product => product.price < maxPrice)
        .map(product => product.price)
        .reduce((sum, price) => sum + price, 0);
};


let user = new User('Foo');












