class Customer {

    private firstName: string = 'DEFAULT';

    constructor() {
        this.firstName = 'Foo';
    }

}

const customer = new Customer();

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

const cheapProductNameList = productList
    .filter(product => product.price < 25)
    .map(product => product.title);

console.log(cheapProductNameList);
