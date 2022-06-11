let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

let section = document.querySelector('.lista');
let personajesFavoritos = '';
if (favoritos != null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos actualmente</p>';
}else{
for (let i = 0; i < favoritos.length; i++) {
const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(cancion){
        console.log(cancion)
        let contenedor4 = document.querySelector("#tutiodos");
       contenedor4.innerHTML += 
      `<article class="articlecanc">
      <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${cancion.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
      <h4>${cancion.title}</h4>
      <p>${cancion.artist.name}</p>
      <a href="" class="fav" id="fav">Agregar a la playlist</a>
      </article>`
        
    })}}