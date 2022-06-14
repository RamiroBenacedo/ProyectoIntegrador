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

let recuperoStorage = localStorage.getItem('favoritos');

if (recuperoStorage != null) {
favoritos = JSON.parse(recuperoStorage);
}

let fav = document.getElementById('fav') 
console.log(fav)

if (favoritos.includes(id)) {
fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function(e){
    e.preventDefault();
    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice, 1)
        fav.innerText = "Agregar a favoritos";
    } else {
        favoritos.push(id);
        fav.innerText = "Quitar de favoritos";
}
let favsJSON = JSON.stringify(favoritos);
localStorage.setItem('favoritos', favsJSON)
})
    })
    .catch(function(error){
        console.log("Error: " + error);
    })


    
} else {
    window.location.href = "index.html";
}
