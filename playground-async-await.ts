/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

export class User {
    firstName: string;
    cityId: string;
}

export class Weather {
    cityId: string;
    temperature: number;
}

const wait = (duration = 0) => {

    return new Promise(resolve => {

        setTimeout(resolve, duration);

    });

};

const getUser = async (): Promise<User> => {

    console.log('retrieving user...');

    await wait(1000);

    return {
        firstName: 'Foo',
        cityId: 'luxembourg'
    };

};

const getWeather = async (cityId): Promise<Weather> => {

    console.log('retrieving weather...');

    await wait(1000);

    return {
        cityId,
        temperature: 5
    };

};

const main = async () => {

    try {

        const user = await getUser();

        const weather = await getWeather(user.cityId);

        console.log(weather.temperature);

    }
    catch (e) {
        console.error(e);
    }

};

main();





