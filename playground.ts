
'use strict';

class Person {

    firstName;

    constructor() {
        this.firstName = 'Foo';
    }

    hello() {
        console.log(this.firstName);
    }

}

const person = new Person();

person.hello();
