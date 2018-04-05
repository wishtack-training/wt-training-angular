/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

declare const Promise;

const getCurrentCity = () => {
    return Promise.resolve('Lyon');
};

const getCityInfo = (city) => {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve({
                city,
                temperature: city.length * 3
            });
        }, 1000);

    });

};

getCurrentCity()
    .then(city => {
        console.log(city);
        return getCityInfo(city);
    })
    .then(length => {
        console.log(length);
    })
    .catch(error => {
        console.log('ERROR');
    });

const main = async () => {

    const city = await getCurrentCity();

    const cityInfo = await getCityInfo(city);

    return cityInfo;

};

main()
    .catch(error => {
        console.log('ERROR');
    });
