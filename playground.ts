'use strict';

class Admin {

    email;

    constructor(
        public firstName: string = null,
        public lastName: string = null
    ) {
    }

    sayHi() {
        console.log(`Hi ${this.firstName} ${this.lastName}`);
    }

    sayHiLater() {

        setTimeout(() =>{
            this.sayHi();
        }, 1000);

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
        name: 'Mouse',
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

console.log(cheapProductNameList);
console.log(totalPrice);



















