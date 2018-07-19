import { interval, Observable, Subject } from 'rxjs';
import { bufferCount, bufferTime, filter, map, retry, take, takeUntil, takeWhile, tap } from 'rxjs/operators';

type Callback = (error, data) => void;

const demoCallback = () => {

    const getCity = (callback: Callback) => {

        setTimeout(() => {

            const city = 'Lyon';

            callback(null, city);

        }, 1000);

    };

    const getWeather = (city, callback: Callback) => {

        setTimeout(() => {

            const temperature = 60 / city.length;

            callback(null, temperature);

        }, 1000);

    };

    getCity((error, city) => {

        if (error) {
            console.error(error);
            return;
        }

        console.log(city);

        getWeather(city, (err, temperature) => {

            if (error) {
                console.error(error);
                return;
            }

            console.log(temperature);

        });

    });


};

const demoPromise = () => {

    const getCity = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const city = 'Lyon';

                resolve(city);

            }, 1000);

        });

    };

    const getWeather = (city) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const temperature = 100 / city.length;

                resolve(temperature);

            }, 1000);

        });

    };

    getCity()
        .then(city => {
            return getWeather(city);
        })
        .then(temperature => {
            console.log(temperature);
        })
        .catch(error => {
            console.log(error);
        });

};

const demoAsyncAwait = async () => {

    const getCity = () => {

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

                const temperature = 100 / city.length;

                resolve(temperature);

            }, 1000);

        });

    };

    try {
        const city = await getCity();
        const temperature = await getTemperature(city);
        console.log(temperature);
    }
    catch (error) {
        console.error(error);
    }

    return 42;

};

// demoAsyncAwait()
//     .then(console.log)
//     .catch(console.error);

const demoObservable = () => {

    const data$ = interval(300);

    const transformedData$ = data$
        .pipe(
            filter(value => value % 4 !== 0),
            tap(value => {
                if (value === 11) {
                    throw new Error('BAD VALUE!');
                }
            }),
            map(value => value * 2),
            bufferTime(1000),
            take(5),
            retry(3)
        );

    const subscription = transformedData$
        .subscribe({
            next: value => console.log(value),
            error: error => console.error('ERROR'),
            complete: () => console.log('DONE!')
        });

    setTimeout(() => {
        subscription.unsubscribe();
    }, 1000);

    const myInterval = (period) => new Observable(observer => {

        let i = 0;

        const handler = setInterval(() => {
            observer.next(i++);
        }, period);

        return () => {
            clearInterval(handler);
        };

    });

    const myInterval$ = myInterval(1000);

    const stopped$ = new Subject();

    myInterval$
        .pipe(
            takeUntil(stopped$)
        )
        .subscribe({
            next: console.log,
            error: console.error,
            complete: () => console.log('DONE!')
        });

    setTimeout(() => {
        stopped$.next();
        stopped$.complete();
    }, 2000);

};

demoObservable();
