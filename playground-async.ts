/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { interval } from 'rxjs/observable/interval';
import { bufferCount, bufferTime, filter, map, take } from 'rxjs/operators';

declare var Promise;

const demoCallback = () => {

    const getCurrentCity = (callback) => {

        setTimeout(() => {
            const city = 'Lyon';
            callback(null, city);
        }, 1000);

    };

    const getTemperature = (city, callback) => {

        setTimeout(() => {
            const temperature = city.length * 5;
            callback(null, temperature);
        });

    };

    getCurrentCity((error, city) => {

        if (error != null) {
            console.error(error);
            return;
        }

        getTemperature(city, (err, temperature) => {

            if (error != null) {
                console.error(error);
                return;
            }

            console.log(`${city}: ${temperature}`);

        });

    });

};

const demoPromise = () => {

    const getCurrentCity = () => {

        return new Promise((resolve) => {

            setTimeout(() => {
                const city = 'Lyon';
                resolve(city);
            }, 1000);

        });

    };

    const getTemperature = (city) => {

        return new Promise((resolve, reject) => {

            if (city === 'Paris') {
                reject(new Error('I hate Paris!'));
                return;
            }

            setTimeout(() => {
                const temperature = city.length * 5;
                resolve(temperature);
            });

        });

    };

    getCurrentCity()
        .then(city => getTemperature(city))
        .then(temperature => console.log(temperature))
        .catch(error => console.error('ERROR!'));

};

const demoAsyncAwait = async () => {

    const getCurrentCity = () => {

        return new Promise((resolve) => {

            setTimeout(() => {
                const city = 'Lyon';
                resolve(city);
            }, 1000);

        });

    };

    const getTemperature = (city) => {

        return new Promise((resolve, reject) => {

            if (city === 'Paris') {
                reject(new Error('I hate Paris!'));
                return;
            }

            setTimeout(() => {
                const temperature = city.length * 5;
                resolve(temperature);
            });

        });

    };

    const city = await getCurrentCity();

    const temperature = await getTemperature(city);

    return temperature;

};

// demoAsyncAwait()
//     .then(temperature => console.log(temperature))
//     .catch(error => console.error('error'));

const demoObservable = () => {

    const timer$ = interval(200)
        .pipe(
            take(5),
            bufferCount(2)
        );

    timer$
        .subscribe(
            value => console.log(value),
            error => console.error('ERROR!'),
            () => console.log('DONE')
        );


};

demoObservable();
