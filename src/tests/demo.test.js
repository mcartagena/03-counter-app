describe('Pruebas en el archivo demo.test.js', () => {
    test('deberia ser verdad', () => {
    
        // 1.- Inicializacion
        const mensaje = 'Hola Mundo';

        // 2.- Estimulo
        const mensaje1 = `Hola Mundo`;

        // 3.- Observar el comportamiento
        expect(mensaje).toBe(mensaje1);

    })
})

