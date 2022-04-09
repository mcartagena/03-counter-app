import React from "react";
//import React, {Fragment} from "react";

const PrimeraApp = ({saludo = 'Hola Mundo'}) => {

    /* const saludo = 'Hola Mundo';

    console.log(props);

     const objeto = {
        nombre: 'Marcelo',
        edad: 51
    }; */

    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(objeto, null, 3)}</pre>*/}
            <p>Mi primera aplicacion.</p>
        </>
    );
}

export default PrimeraApp;