class Customer {

    constructor(public firstName: string = null,
                public lastName: string = null) {
    }

    sayHi() {
        console.log(`Hi ${this.firstName}`);
    }

    sayHiLater() {

        setTimeout(() => {
            this.sayHi();
        }, 1000);

    }
}

const hello = (customer) => {
    console.log(`Hello ${customer.firstName}`);
};

const customer = new Customer();

customer.sayHi();

customer.sayHiLater();

hello(customer);

class Product {
    name: string;
    price: number;
}

const productList: Product[] = [
    {
        name: 'Slack',
        price: 5
    },
    {
        name: 'IntelliJ',
        price: 10
    },
    {
        name: 'BrowserStack',
        price: 30
    }
];

const cheapProductNameList = productList
    .filter(product => product.price < 15)
    .map(product => product.name);

const cheapProductsTotalPrice = productList
    .filter(product => product.price < 15)
    .map(product => product.price)
    .reduce((result, price) => result + price, 0);

const stats = productList
    .reduce((result, product) => {

        return {
            count: result.count + 1,
            totalPrice: result.totalPrice + product.price
        };

    }, {
        count: 0,
        totalPrice: 0
    });

console.log(cheapProductNameList);
console.log(cheapProductsTotalPrice);
console.log(stats);
console.log(stats.totalPrice / stats.count);
