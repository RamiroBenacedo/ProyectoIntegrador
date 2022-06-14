let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
console.log(id)
let urluno = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;

let contenedor5 = document.querySelector("#detallegeneros");
if(id !== null){
    fetch(urluno)
    .then(function(response){
    return response.json();
    })
    .then(function(genero){
        console.log(genero)
      contenedor5.innerHTML += 
      `<article class="articlecanc">
      <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/genre/${genero.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
      <h4>${genero.title}</h4>
      <p>${genero.name}</p>
      </article>`
        
    }).then(function(){
        let favoritos = [];


} else {
    window.location.href = "index.html";
}
