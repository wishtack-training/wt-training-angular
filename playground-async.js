/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

const getCity = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const city = 'Luxembourg';
            resolve(city);
        }, 1000);

    });

};

const getTemperature = () => {
    return Promise.resolve(42);
};

const main = async () => {

    try {

        const city = await getCity();

        const temperature = await getTemperature(city);

        return temperature;

    }
    catch (error) {
        console.log('Oups!');
        throw error;
    }

};

main()
    .then(console.log)
    .catch((error) => console.log(error));
