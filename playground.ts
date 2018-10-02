class Person {

    firstName: string;
    lastName = 'BAR';

    constructor() {
        this.firstName = 'Foo';
    }

    sayHi() {
        console.log(`Hi ${this.firstName}`);
    }

}

const productList = [
    {
        title: 'Browserstack',
        price: 50
    },
    {
        title: 'Keyboard',
        price: 20
    },
    {
        title: 'Prerender',
        price: 10
    }
];

const cheapProductTitleList = productList
    .filter(product => product.price < 25)
    .map(product => product.title);


console.log(cheapProductTitleList);

const person = new Person();

person.sayHi();
