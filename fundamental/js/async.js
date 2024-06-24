const arr = [0, 1, 2, 3, 4, 5];

const findPerson = async (id) => {
    const person = {
        id,
        name: 'Juan',
        age: 42
    };

    setTimeout(() => {

    }, 4000);

    return person;
}

const id = 1;
const p1 = findPerson(id)
    .then(p => console.log({ p }))
    .catch(err => console.log(err));

//console.log( { p1 } );

const testAsync = async () => {

    console.time('start1');

    const p1 = await findPerson(1);
    const p2 = await findPerson(2);
    const p3 = await findPerson(3);

    console.timeEnd('start1');

    console.log({ p1, p2, p3 });

    console.time('start2');

    const [per1, per2, per3] = await Promise.all([
        findPerson(1),
        findPerson(2),
        findPerson(3)
    ]);

    console.timeEnd('start2');

    console.log({ per1, per2, per3 });
}

testAsync();


async function* asyncGenerator() {
    yield new Promise(resolve => setTimeout(() => resolve(1), 1000));
    yield new Promise(resolve => setTimeout(() => resolve(2), 1000));
    yield new Promise(resolve => setTimeout(() => resolve(3), 1000));
}

async function process() {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
}

process();

async function* promiseGenerator(){
    yield new Promise( resolve => setTimeout(() => resolve(4), 1000) );
}

const ejecutar = async () => {
    for await (const value of promiseGenerator()){
        console.log(`value generator ${ value }`);
    }
}

ejecutar();