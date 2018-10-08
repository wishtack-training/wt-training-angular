class Customer {

    constructor(
        public firstName?: string,
        public lastName?: string
    ) {
    }

}

const customer = new Customer();
customer.firstName = 'Foo';

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

const userName = 'Foo';

const message = `
----------
Hello Mr ${userName}.
----------`;
console.log(message);

const maxPrice = 25;
const cheapTitleProductList = productList
    .filter(product => product.price < maxPrice)
    .map(product => product.title);

console.log(cheapTitleProductList);