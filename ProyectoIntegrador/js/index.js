let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart';

let contenedor = document.querySelector("#tutio");



fetch(url)
    .then(function(response){
    return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let canciones = datos.albums.data;

        for (let i = 0; i < 5; i++){
        contenedor.innerHTML += `
        <article class="articlecanc">
        <img src="${canciones[i].cover}" alt="" class="fotodiscos">
        <h4>${canciones[i].title}</h4>
        <p>${canciones[i].artist.name}</p>
        <a href="./detalle-album.html" class="verMas">Ver más</a>
    </article>
    `
        }
    })
    .catch(function(error){
        console.log("Error: " + error);
    })