
const pet = {
    name: 'Gaia',
    age: 2,
    species: 'CAT'    
};

const getPerson = ( name, age ) => ( { name, age } );

const getPerson2 = ( name, age ) => {
    return { 
        'address': 'Center'
    }
};

const person = getPerson ( 'John', 36);
console.log( person );

const { address } = getPerson2('John', 40);
console.log( 'address:', address);

// rest parameter ... (in function)
const printArgs = ( ...args ) => console.log( args );
printArgs(1, true, 'Test');

const array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const [monday, tuesday] = array;

console.log( monday, tuesday );

const getPet = ( { name, age, species })  => {
    console.log( {name} );
    console.log( {age} );
    console.log( {species} );
}

getPet( pet );
