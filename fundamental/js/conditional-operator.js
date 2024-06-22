const day = 1;
const currentTime = 9;

const openingTime = ( [0, 6].includes( day) )? 9 : 11;
console.log( { openingTime } );

const message = (openingTime >= currentTime? 'open':'close');
console.log( { message } );

const note  = 90;

const grade = note >= 95 ? 'A+' :
              note >= 90 ? 'A'  :
              note >= 85 ? 'B+' :
              note >= 80 ? 'B'  :
              note >= 75 ? 'C'  : 'D';

console.log( { note, grade } );

