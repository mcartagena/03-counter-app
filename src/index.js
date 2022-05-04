import React from "react";
// import {createRoot} from "react-dom/client";
import {render} from "react-dom";
// import PrimeraApp from "./PrimeraApp";

import './index.css';
import CounterApp from "./CounterApp";

//const rootDom = document.querySelector("#root");
//const root = createRoot(rootDom);

// root.render(<PrimeraApp saludo = 'Hola Mundo'/>);

//root.render(<PrimeraApp saludo = "Hola, soy Marcelo" />);
// root.render(<CounterApp value = {7} />);

const divRoot = document.getElementById("root");
// render(<PrimeraApp saludo="Hola soy Marcelo" />, divRoot);
render(<CounterApp value={10}/>, divRoot);
