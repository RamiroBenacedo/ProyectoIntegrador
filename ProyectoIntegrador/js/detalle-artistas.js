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
      `            
            <article class="article">
             <img src="${artista.picture_medium}" alt="" class="img">
            <p class="lorem">${artista.name}</p>
         </article>`
        
    })
} else {
    window.location.href = "index.html"
}