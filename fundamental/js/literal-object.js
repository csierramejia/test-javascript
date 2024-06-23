//import { Person } from './classes/Person.js';
person = {

    name: 'Juan',
    age: 30,
    address: {
        zip: '10880, 90265'
    },
    job: 'developer',
    temp: null
};

console.log( person );
console.log( person.name );
console.log( person['name']);
console.log( person.address.zip);

delete person.temp;

console.log( person );

Object.freeze ( person );

const properties = Object.getOwnPropertyNames( person );
const values = Object.values( person );

console.log( { properties, values } );