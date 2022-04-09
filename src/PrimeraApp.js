import React from "react";
import PropTypes from "prop-types";

//import React, {Fragment} from "react";

// const PrimeraApp = ({saludo = 'Hola Mundo'}) => {
const PrimeraApp = ({ saludo, subtitulo }) => {

    /* const saludo = 'Hola Mundo';

    console.log(props);

     const objeto = {
        nombre: 'Marcelo',
        edad: 51
    }; */

    return (
        <>
            <h1>{ saludo }</h1>
            {/*<pre>{JSON.stringify(objeto, null, 3)}</pre>*/}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}
export default PrimeraApp;