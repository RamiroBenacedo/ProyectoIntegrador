let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
console.log(id)
let urluno = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`;

let contenedor4 = document.querySelector("#tutiodos");
fetch(urluno)
    .then(function(response){
    return response.json();
    })
    .then(function(artistas){
        console.log(artistas)
      contenedor4.innerHTML += 
      `            
            <article class="article">
            <a href="./detalle-artistas.html"> <img src="${artistas[i].picture_medium}" alt="" class="img"></a>
             <a href="./detalle-artistas.html"><p class="lorem">${artistas[i].name}</p></a>
             <a href="${artistas[i].tracklist}" class="verMas">Ver Más</a>
         </article>`
        
    })