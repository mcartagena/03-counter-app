

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'nnf90kUoJAbaBM90YzdM0b6PVEUJzD2B';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const data = await resp.json();

        const {url} = data.data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
    
    
    
}




