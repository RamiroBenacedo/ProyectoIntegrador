let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
console.log(id)
if(id !== null){
let urluno = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;

fetch(urluno)
    .then(function(response){
    return response.json();
    })
    .then(function(genero){
        console.log(genero)
        let contenedor4 = document.querySelector("#tutiodos");
        contenedor4.innerHTML +=
        `<article class="articlecanc">
        <img src="${genero.picture_medium}" alt="" class="img">
        <p class="lorem">${genero.name}</p>
        </article>`})
    }else {
}