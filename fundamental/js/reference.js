
const juan = { name: 'Juan', age: 28};
let ana = { ...juan };  // Spread Operator   ...
ana.name = 'Ana';

console.log( ana, juan );

const renamePerson = ( {...person} ) => {  // Spread Operator
    person.name = 'Ana';
    return person;
}

ana = juan;
ana = renamePerson( ana );
console.log( ana, juan );

// Array
const fruits  = ['apple', 'orange', 'banana'];

console.time('slice');
const fruits2 = fruits.slice();
console.timeEnd('slice');
console.log( { fruits, fruits2 } );

console.time('spread');
const fruits3 = [ ...fruits ];
console.timeEnd('spread');
console.log( { fruits, fruits3 } );


