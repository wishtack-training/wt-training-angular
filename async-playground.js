
const { Observable, BehaviorSubject } = require('rxjs');

const temperatureDict = {
    'Luxembourg': 18,
    'Lyon': 20
};

const usingPlainOldCallbacks = () => {

    const getCurrentCity = (callback) => {

        setTimeout(() => {

            const city = 'Lyon';

            callback(null, city);

        }, 1000);

    };

    const getTemperature = (city, callback) => {

        setTimeout(() => {

            const temperature = temperatureDict[city];

            callback(null, temperature);

        }, 1000);

    };

    getCurrentCity((error, city) => {

        getTemperature(city, (error, temperature) => {

            console.log(`${city}: ${temperature}`);

        });
    });

};


const usingPromises = () => {

    const getCurrentCity = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const city = 'Lyon';

                resolve(city);

            }, 1000);

        });

    };

    const getTemperature = (city) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(temperatureDict[city]);

            }, 1000);

        });

    };

    const cityPromise = getCurrentCity();

    cityPromise
        .then(city => getTemperature(city))
        .then(value => console.log(value))
        .catch(error => console.error(error));

};

const usingAsyncAwait = async () => {

    const getCurrentCity = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const city = 'Lyon';

                resolve(city);

            }, 1000);

        });

    };

    const getTemperature = async (city) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(temperatureDict[city]);

            }, 1000);

        });

    };

    try {
        const city = await getCurrentCity();
        const temperature = await getTemperature(city);
        console.log(`${city}: ${temperature}`);
    }
    catch (error) {
        console.error('💩');
    }

};

const usingReactiveProgramming = () => {

    const timer$ = Observable.interval(100);

    const coolNumbers$ = timer$
        .map(data => data * 2)
        .filter(data => data % 4)
        .do(data => {
            if (data === 10) {
                throw new Error('I hate 10!');
            }
        })
        .takeWhile(value => value < 20);

    const subscription = coolNumbers$
        .take(2)
        .retry(3)
        .subscribe(
            data => console.log(data),
            error => console.error('ERROR')
        );

};


// usingPlainOldCallbacks();
// usingPromises();
// usingAsyncAwait().catch(error => console.error(error));
// usingReactiveProgramming();

const usingReactiveStore = () => {

    const subject = new BehaviorSubject(null);

    subject.next('Hello 1');
    subject.next('Hello 2');
    // console.log(subject.getValue());

    // Consumer.
    subject.subscribe(data => console.log(data));

    // Producer.
    subject.next('Bye!');

    class Cart {

        constructor() {
            this.productList$ = new BehaviorSubject([]);
        }

        addProduct(product) {
            const productList = [
                ...this.productList$.getValue(),
                product
            ];
            this.productList$.next(productList);
        }

    }

    const cart = new Cart();

    // Consumer
    cart.productList$
        .map(productList => {
            return productList
                .map(product => product.name);
        })
        .subscribe(productNameList => console.log(productNameList));

    // Producer.
    cart.addProduct({name: 'Car'});
    cart.addProduct({name: 'Computer'});


};

usingReactiveStore();

