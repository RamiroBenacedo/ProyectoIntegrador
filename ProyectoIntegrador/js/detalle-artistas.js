let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
console.log(id)
if(id !== null){
let urluno = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

let contenedor4 = document.querySelector("#tutiodos");

fetch(urluno)
    .then(function(response){
    return response.json();
    })
    .then(function(artista){
        console.log(artista)
        contenedor4.innerHTML +=
        `<article class="articlecanc">
        <img src="${artista.picture_medium}" alt="" class="img">
        <h3 class="lorem">${artista.name}</h3>
        </article>`})}
    else {
    window.location.href = "index.html"
}
let urldos = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`
let contenedor = document.querySelector("#tutiodos");
    fetch(urldos)
    .then(function(response){
    return response.json();
    })
    .then(function(albumes){
        console.log(albumes)
        for (let i = 0; i < 5; i++) {
            contenedor.innerHTML += `
        <article class="articlecanc">
        <img src="${albumes[i].cover}" alt="" class="fotodiscos">
        <h4>${albumes[i].title}</h4>
        <p>${albumes[i].artist.name}</p>
        <a href="./detalle-album.html" class="verMas">Ver más</a>
    </article>
    `
        }})