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

const getUser = () => {

    return new Promise<User>((resolve, reject) => {

        console.log('retrieving user...');

        setTimeout(() => {
            const user = {
                firstName: 'Foo',
                cityId: 'luxembourg'
            };
            resolve(user);
        }, 1000);


    });

};

const getWeather = (cityId) => {

    return new Promise<Weather>((resolve, reject) => {

        console.log('retrieving weather...');

        setTimeout(() => {
            const weather = {
                cityId,
                temperature: 5
            };
            resolve(weather);
        }, 1000);


    });

};


const main = () => {

    getUser()
        .then(user => getWeather(user.cityId))
        .then(weather => console.log(weather.temperature))
        .catch(error => console.error(error));

};

main();





