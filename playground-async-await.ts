
'use strict';

const wait = (duration) => new Promise(resolve => {

    setTimeout(resolve, duration);

});

/**
 * Producer.
 * @param userId
 * @param callback
 */
const getUser = async (userId) => {

    await wait(1000);

    return {
        id: userId,
        city: 'Lyon',
        firstName: 'Foo'
    };

};

const getTemperature = (city) => Promise.resolve(`${city}: 42`);

const main = async () => {

    const user = await getUser(123);

    const temperature = await getTemperature(user.city);

    console.log(temperature);

    return 100;

};


main()
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
