import React from "react";
import {createRoot} from "react-dom/client";

const saludo = <h1>Hola Mundo</h1>;

const rootDom = document.querySelector("#root");
const root = createRoot(rootDom);

console.log(saludo);

console.log(rootDom);

root.render(saludo);