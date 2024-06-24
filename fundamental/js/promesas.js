const arr = [0, 1, 2, 3, 4, 5];

const findPerson = ( id ) => {

    return new Promise(( resolve, reject ) => {
        const person = {
            name: 'Juan',
            age:  38
        };

        const idx = arr.find( e => e === id );

        if( idx ){
            resolve( person );
            return;
        }

        reject ('No se encontro la persona');
    });
}

const myLog = ( p1 ) =>{
    console.log( { p1 } );
}

const id = 3;

findPerson( id )
    .then( myLog )  // p => myLog( { p } )
    .catch( err => console.log( err ));

Promise.all( [
    findPerson( id ),
    findPerson( 4 ) 
])
.then (([ p1, p2 ]) => console.log( { p1, p2} ) )
.catch( err => console.log( err ) );    