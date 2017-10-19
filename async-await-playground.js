
const cookBurger = () => {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve('🍔');
        }, 1000);

    });


};

const eatBurger = (burger) => {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve('💩');
        }, 1000);

    });

};

const main = async () => {

    try {

        const burger = await cookBurger();

        console.log(burger);

        const result = await eatBurger(burger);

        console.log(result);

    }
    catch(error) {
        console.log(error);
    }

};

console.log('start');
main();
console.log('end');
