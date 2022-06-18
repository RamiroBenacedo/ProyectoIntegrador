let qs = location.search

let qsto = new URLSearchParams(qs)

let id77 = qsto.get("id")

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id77}`

let main = document.querySelector(".tutio3")

fetch(url)
.then(function(response) {
return response.json();    
})
.then(function(data) {
console.log(data);
main.innerHTML = `    <div class="Div-Titulo-Detalle-Album"><h1>Detalle del Album: ${data.title}</h1></div>
<div class="Logo-Duketo div">
    <img class="Imagen-Album-Duketo" src="${data.cover}" alt="Imagen del Duketo">
</div>

<article class="main-detalle-album">

<div id="div-detalle-album"><h2 class="h2-detalle">Artista: <a href="./detalle-artistas.html?id=${data.artist.id}">${data.artist.name}</a></h2></div>

<div class="imagen-duki"><img class="duki-tranquilo" src="./img/Dukiii.jpg" alt="Duketo atr"></div>

<div id="div-detalle-album"><h2 class="h2-detalle">Genero: <a href="https://es.wikipedia.org/wiki/Reguetón">Reggaetón</a>, <a href="https://es.wikipedia.org/wiki/Urban">Urbano Latino</a>, <a href="https://es.wikipedia.org/wiki/Pop">Pop</a></h2></div>

<div id="div-detalle-album"><h2 class="h2-detalle">Fecha de Publicación: 25/11/2021</h2></div>

<div id="div-detalle-album"><h2 class="h2-detalle">Canciones que componen este disco:</h2></div>

<div>
    <ol class="h2-detalle ol">
        <li><a href="./detalle-cancion.html">En Movimiento</a></li>
        <li><a href="./detalle-cancion.html">Ley de Atraccion</a></li>
        <li><a href="./detalle-cancion.html">BICI</a></li>
        <li><a href="./detalle-cancion.html">Midtown</a></li>
        <li><a href="./detalle-cancion.html">TOP 5</a></li>
        <li><a href="./detalle-cancion.html">YIN YAN </a></li>
        <li><a href="./detalle-cancion.html">Unfollow</a></li>
    </ol>
</div>
</article>
`

    
})
