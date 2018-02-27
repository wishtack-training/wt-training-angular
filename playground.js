/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

class Customer {

    constructor() {
        this._firstName = 'Foo';
    }

    sayHi() {
        console.log(this._firstName);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }

}

const debug = (data) => {
    console.log(data);
};

const customer = new Customer();

customer.sayHi();
customer.sayHiLater();

const productList = [
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

const byPrice = ({min = 10, max = 100}) => product => product.price > min && product.price < max;


const cheapProductList = productList
    .filter(byPrice({max: 37}));

const cheapProductNameList = cheapProductList
    .map(product => product.name);

const totalPrice = cheapProductList
    .map(product => product.price)
    .reduce((sum, price) => sum + price, 0);

console.log(cheapProductList);
console.log(cheapProductNameList);
console.log(totalPrice);