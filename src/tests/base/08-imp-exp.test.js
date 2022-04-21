import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un hero por id', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar undefine por id que no existe', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

//    Debo retornar un arreglo con los heroes de DC
//    definir una const owner
//    utilizar toEqual al arreglo filtrado

    test('Debo retornar un arreglo con los heroes de DC como parametro ', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroes).toEqual(heroesData);

    })

//    Debo retornar un arreglo con los heroes de Marvel
//    definir una const owner
//    utilizar toBe para el largo de 2

    test('Debo retornar un arreglo con los heroes de Marvel como parametro ', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })

});