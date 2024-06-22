
const cars = ['Ford', 'Chevrolet', 'Mazda', 'Toyota'];

let i = 0;

console.warn('While');

while(i < cars.length){
    console.log( cars[i] );
    i++;
}

i = 0;

console.warn('Do While');

do{
    console.log( cars[i] );
    i++;
} while( i < cars.length );


console.warn('For');

for (let index = 0; index < cars.length; index++) {
    console.log( cars[index] );
}

console.warn('For in');

for (const idx in cars) {
    console.log( cars[idx] );    
}

console.warn('For of');
for (const car of cars) {
    console.log( car );
    
}