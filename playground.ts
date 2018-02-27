/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

class Customer {

    firstName: string;
    email: string;
    address: string;

    constructor() {
        this.firstName = 'Foo';
    }

    sayHi() {
        console.log(this.firstName);
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


class ShopAdmin {
    name: string;
    email: string;
    address: string;
}

interface Messagable {
    email: string;
    address?: string;
}

const sendMessage = (messagable: Messagable) => {
    console.log(`Hello ${messagable.email}`);
};

sendMessage(new Customer());
sendMessage(new ShopAdmin());

sendMessage({
    email: 'foo@wishtack.com'
});

const en = {
    'HELLO': 'Hello',
    'BYE': 'Bye'
};

type TranslationData = typeof en;

const fr: TranslationData = {
    'HELLO': 'Bonjour',
    'BYE': 'Au revoir'
};

let foodType: '🍔' | '🥦' | 'burger';

foodType = 'burger';
