const fetchService = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return await response.json();
}

const recuperarDatos = async () => {
    const response = await fetchService();
    const results = response.results; // Access the results array
//    console.log(results); // Now logs the array of character objects

    for (const idx in results) {
//        console.log( results[idx] );    

        if( results[idx].id === 19 ){
            // console.log( results[idx] );
            const { name, gender, species } = results[idx]; 
            console.log( { name, gender, species } );
        }
    }    
};

recuperarDatos();