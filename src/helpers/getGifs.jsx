
//Esta función:
export const getGifs = async(category) => {

    //(1) Hace una llamada HTTP
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1wQEGWiD8EQ9L9lLfqNV0ZbX8V8swTZx`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    //(2) Trae las imágenes y  las procesa
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //(3) Las imprime:
    return gifs;
}