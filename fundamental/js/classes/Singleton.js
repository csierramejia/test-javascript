class Singleton{

    static instance;
    name;

    constructor( name ){

        if( !!Singleton.instance ){
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
    }
}

const instance1 = new Singleton('Instance 1');
const instance2 = new Singleton('Instance 2');
const instance3 = new Singleton('Instance 3');

console.log( { instance1, instance2, instance3 } );