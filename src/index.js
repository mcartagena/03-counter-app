import React from "react";
import {createRoot} from "react-dom/client";
import PrimeraApp from "./PrimeraApp";

import './index.css';

const rootDom = document.querySelector("#root");
const root = createRoot(rootDom);

root.render(<PrimeraApp saludo = 'Hola Mundo'/>);