let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart';

let contenedor = document.querySelector("#tutio");

let contenedor2 = document.querySelector(".section")

let contenedor3 = document.querySelector(".section2")

let contenedor4 = document.querySelector("#section3")

fetch(url)
    .then(function(response){
    return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let albumes = datos.albums.data;
        let artistas = datos.artists.data;
        let canciones = datos.tracks.data;
        for (let i = 0; i < 5; i++){
        contenedor.innerHTML += `
        <article class="articlecanc">
        <img src="${albumes[i].cover}" alt="" class="fotodiscos">
        <h4>${albumes[i].title}</h4>
        <p>${albumes[i].artist.name}</p>
        <a href="./detalle-album.html" class="verMas">Ver más</a>
    </article>
    `
            contenedor2.innerHTML += `            
            <article class="article">
            <a href="./detalle-artistas.html"> <img src="${artistas[i].picture_medium}" alt="" class="img"></a>
             <a href="./detalle-artistas.html"><p class="lorem">${artistas[i].name}</p></a>
             <a href="${artistas[i].tracklist}" class="verMas">Ver Más</a>
         </article>`
        
      contenedor4.innerHTML += `           
      <article class="articlecanc">
      <iframe width="560" height="315" class="videos" src="${canciones[i].link}" frameborder="0"></iframe>
      <h4>${canciones[i].title}</h4>
      <p>${canciones[i].artist.name}</p>
      <a href="./detalle-cancion.html" class="verMas">Ver más</a>
  </article>`
        }
        for (let i = 5; i < 10; i++) {

            contenedor3.innerHTML += `            
            <article class="article">
            <a href="./detalle-artistas.html"> <img src="${artistas[i].picture_medium}" alt="" class="img"></a>
             <a href="./detalle-artistas.html"><p class="lorem">${artistas[i].name}</p></a>
             <a href="${artistas[i].tracklist}" class="verMas">Ver Más</a>
         </article>`
            
        }
    })
    .catch(function(error){
        console.log("Error: " + error);
    })