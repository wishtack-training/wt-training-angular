/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

const f = async () => Promise.resolve(42);


const main = async () => {
    
    const value = await f();

    console.log(value);

};


main();