import React from "react";
import {createRoot} from "react-dom/client";
// import PrimeraApp from "./PrimeraApp";

import './index.css';
import CounterApp from "./CounterApp";

const rootDom = document.querySelector("#root");
const root = createRoot(rootDom);

// root.render(<PrimeraApp saludo = 'Hola Mundo'/>);

root.render(<CounterApp value = {7} />);