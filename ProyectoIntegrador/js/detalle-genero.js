let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
console.log(id)
if(id !== null){
let urluno = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;

let contenedor4 = document.querySelector("#detallegeneros");

    fetch(urluno)
    .then(function(response){
    return response.json();
    })
    .then(function(genero){
        console.log(genero)
        contenedor4.innerHTML +=
        `<article class="article">
        <img src="${genero.picture_medium}" alt="" class="img">
        <p class="lorem">${genero.name}</p>
        </article>`})
    }else {
    window.location.href = "index.html";
}