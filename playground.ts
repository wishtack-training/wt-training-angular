class Customer {

    private readonly _email = 'test';

    constructor(public firstName, public lastName = null) {
    }

    sayHi() {
        setTimeout(() => console.log(this.firstName));
    }

}

const customer = new Customer('Foo');

customer.sayHi();


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

const userName = '<img src="ajsdkfjasdfl" onerror="alert(1)">';
const greetings = `
<div>
    <span>${userName}</span>
</div>
`;

console.log(greetings);

const cheapProductTitleList = productList
    .filter(product => product.price < 25)
    .map(product => product.title);

console.log(cheapProductTitleList); // ['Keyboard', 'Prerender']


document.querySelector('button').disabled = true;