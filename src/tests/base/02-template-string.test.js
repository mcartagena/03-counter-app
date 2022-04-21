import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas para el archivo 02-template-string', ()=>{
    test("getSaludo debe retornar hola nombre", () => {

        const nombre = 'Marcelo';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${ nombre }`);

    })

    test('getSaludo debe retornar hola default cuando no hay argumento',
        () => {
            const saludo = getSaludo();

            expect(saludo).toBe('Hola default');

        })
})