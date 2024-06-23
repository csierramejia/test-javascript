class Person{
    name;
    age;
    job;
    address = {
        code: null
    };

    static constructorObject( { name, age, job, address } ){
        return new Person( name, age, job, address );
    }

    constructor( name, age, job, address ){
        this.name    = name;
        this.age     = age;
        this.job     = job;
        this.address = address;
    }
}

//const dir = { code: '11001' }; 
const juan = new Person( 'juan', 36, 'Software', { 'code': 17001 } );
console.log( juan );

const per = {
      name: 'Juan',
      age:  36,
      job:  'Develop',
      address: {'code': 11001}
};

const p2 = Person.constructorObject(per)

console.log( { p2 });