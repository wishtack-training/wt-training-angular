
const demoCustomer = () => {

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

};


const demoFilterMap = () => {

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

};

const demoImmutability = () => {


    let userInfo = {
        name: 'Foo',
        address: 'Lyon'
    };

    const getUserName = () => 'John';

    const getAddress = (): string => {
        // throw new Error('Geolocation error!');
        return 'Grenoble';
    };

    const updateUserInfo = (userInfo) => {

        return {
            name: getUserName(),
            address: getAddress()
        };

    };

    try {
        userInfo = updateUserInfo(userInfo);
    }
    catch {
        console.log('ERROR');
    }

    console.log(userInfo);

    // -----

    let itemList = [
        1,
        2
    ];

    const itemListOriginal = itemList;

    itemList = [...itemList, 3, 4];

    console.log(itemListOriginal);
    console.log(itemList);
    console.log(itemList === itemListOriginal);


};

const demoDestructuring = () => {

    // Ordered parameters
    const orderedFunk = (a, b) => {
        console.log(a + b);
    };

    // const namedVerboseFunk = (args) => {
    //
    //     if (args.c === undefined) {
    //         args.c = 4;
    //     }
    //
    //     console.log(args.a + args.b + args.c);
    // };

    // const namedVerboseFunk = (args) => {
    //
    //     const { a, b, c = 4 } = args;
    //
    //     console.log(a + b + c);
    // };

    const namedFunk = ({c = 4, a, b}) => {
        console.log(a + b + c);
    };

    const a = 1;
    const b = 2;

    orderedFunk(a, b);

    namedFunk({a, b});

    namedFunk({a, b, c: 5});

};

demoDestructuring();