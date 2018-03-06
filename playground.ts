'use strict';

class Customer {

    firstName;
    lastName;

    constructor(firstName = null, lastName = null) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi ${this.firstName}!`);
    }

    sayHiLater() {

        setTimeout(() => this.sayHi(), 1000);

    }

}

const customer = new Customer('Foo');

customer.sayHi();

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
        name: 'Keyboard',
        price: 10
    }
];


const cheapProductNameList = productList
    .filter(product => product.price < 25)
    .map(product => product.name);

console.log(cheapProductNameList);

const stats = productList
    .filter(product => product.price < 25)
    .reduce((result, product) => {
        return {
            count: result.count + 1,
            price: result.price + product.price
        };
    }, {
        count: 0,
        price: 0
    });

console.log(stats);
console.log(`Average price: ${stats.price / stats.count}`);
