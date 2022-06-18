let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
console.log(id)
if(id !== null){
let urluno = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;

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
}
let urldos = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
let contenedor5 = document.querySelector("#tutiodos");
    fetch(urldos)
    .then(function(response){
        console.log(response)
    return response.json();
    })
    .then(function(albumes){
        console.log(albumes)
        for (let i = 0; i < 5; i++) {
            contenedor5.innerHTML += `
        <article class="articlecanc">
        <img src="${albumes[i].cover_medium}" alt="" class="fotodiscos">
        <h4>${albumes[i].title}</h4>
        <p>${albumes[i].data.release_date}</p>
        <a href="./detalle-album.html" class="verMas">Ver más</a>
    </article>
    `
        }})