'use strict';

class Person {

    firstName;

    constructor() {
        this.firstName = 'Foo';
    }

    sayHi() {
        console.log(this.firstName);
    }

    sayHiLater() {

        setTimeout(() => this.sayHi(), 1000);

    }

}

const person = new Person();

person.sayHi();

person.sayHiLater();

class Person {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}


class Administrator {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
}

interface Emailable {
    firstName: string;
    email: string;
}

const sendEmail = (emailable: Emailable) => {

};

sendEmail({
    firstName: 'foo',
    email: 'test'
});

sendEmail(new User());

sendEmail(new Administrator());

const productList = [
    {
        name: 'IntelliJ',
        price: 100
    },
    {
        name: 'VSCode',
        price: 5
    },
    {
        name: 'Keyboard',
        price: 20
    }
];

const cheapProductNameList = productList
    .filter(product => product.price < 30)
    .map(product => product.name);

console.log(productList);
console.log(cheapProductNameList);
