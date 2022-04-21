import "@testing-library/jest-dom"
import { getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('pruebas en archivo 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const usuarioRetornado = getUser();

        expect(usuarioRetornado).toEqual(usuario);

    })

    test('getUsuarioActivo debe retornar un objeto con el valor del argumento', () => {

        const usuario = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        };

        const usuarioRetornado = getUsuarioActivo(usuario.username);

        expect(usuarioRetornado).toEqual(usuario);


    })

})