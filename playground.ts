/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';


class Bird {

    name: string;

    constructor() {
        this.name = 'Donald';
    }

    sayHi() {
        console.log(`Kwak! my name is ${this.name}.`);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }

}

const bird = new Bird();

// bird.sayHiLater();

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
        name: 'Keyboard',
        price: 10
    }
];

const cheapProductList = productList
    .filter(product => product.price < 25);

const cheapProductNameList = cheapProductList
    .map(product => product.name);

const totalPrice = cheapProductList
    .map(product => product.price)
    .reduce((total, price) => total + price, 0);

console.log(productList);

console.log(cheapProductNameList);

console.log(totalPrice);
