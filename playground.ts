'use strict';

interface Email {
    provider: string;
}

export class User {

    constructor(public firstName: string = null,
                public lastName: string = null) {
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

const cheapProductNameList = productList
    .filter(product => product.price < 25)
    .map(product => product.name);

const totalPrice = productList
    .map(product => product.price)
    .reduce((sum, price) => sum + price, 0);

console.log(cheapProductNameList);
console.log(totalPrice);

















