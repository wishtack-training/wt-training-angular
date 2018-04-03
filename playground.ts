class Customer {

    private _firstName: string;
    private _lastName: string;
    private _email: string;

    constructor(firstName, lastName, email = null) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    sayHi() {
        console.log(`Hi ${this._firstName}!`);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }

}

const customer = new Customer('Foo', 'BAR');

customer.sayHiLater();

const hello = () => {
    console.log('Hello');
};

hello();

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

class Company {
    address: string;
    email: string;
    name: string;
}

class Employee {
    gender: string;
    email: string;
    name: string;
}

interface Emailable {
    email: string;
    name: string;
}

const sendEmail = (emailable: Emailable, message) => {
    console.log(`${emailable.email}: ${message}`);
};

sendEmail(new Employee(), 'hello');
sendEmail(new Company(), 'hello');
sendEmail({name: 'Foo', email: 'test'}, 'hello');
