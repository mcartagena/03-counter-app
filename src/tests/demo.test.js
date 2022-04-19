test('deberia ser verdad', () => {
    const isActive = true;
    if(isActive) {
        throw new Error('deberia estar activo');
    }
})