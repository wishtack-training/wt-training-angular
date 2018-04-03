class Customer {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = null;
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

const cheapProductList = productList.filter((product) => {
    return product.price < 25;
});

console.log(cheapProductList);

let cheapProductNameList = cheapProductList.map((product) => {
    return product.name;
});

console.log(cheapProductNameList);

cheapProductNameList = productList
    .filter(product => product.price < 25)
    .map(product => product.name);

console.log(cheapProductNameList);
