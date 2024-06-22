

let things = [
    'Gaia',    
    true,
    123,
    function(){},
    () => { console.log( 'Nombre:', things[0] ) },
    ['X', 'Y', 'Z']
];

console.log( things );

things.forEach(element => {
    //console.log( element );
    if (typeof element === 'function') {
      element(); // Execute the arrow function if it's a function
    }
  });

for (let i = 0; i < things.length; i++){
    if ( typeof things[i] === 'function'){
        things[i]();
    }     
}

console.log( Array.isArray( things[5] ));

things.forEach(e => {
    if ( Array.isArray( e )){
        console.log( e[0]);
    }
});

things.unshift('first');
console.log( things );

things.push('last');
console.log( things );

console.log( things.indexOf( 'Gaia' ) );

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const day = new Date();

console.log( 'day:', days[day.getDay()] );