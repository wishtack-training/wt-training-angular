
function getValue() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(42), 1000);
    });
    return promise;
}

function triple(value) {
    return new Promise(resolve => {
        setTimeout(() =>  resolve(value * 3), 1000);
    })
}

async function main() {

    try {
        const data = await getValue();

        return await triple(data * 2);
    } catch (e) {

    }

}

main()
    .then(data => {
        console.log(data)
    });
