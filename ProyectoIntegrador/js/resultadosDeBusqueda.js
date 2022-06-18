let Resultado = document.querySelector(".queso")

let cosasguardada = location.search

let objliteral = new URLSearchParams(cosasguardada)

let resultados = objliteral.get("cancion")
console.log(resultados);
let url77 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${resultados}`

fetch(url77)

.then(function(response){
    return response.json();
})
.then(function(datos) {
    let imp = datos.data

    console.log(imp);
    if (imp.length > 0) { 
        Resultado.innerHTML = `<h1 id="duki">Resultados de Busqueda para: ${resultados}</h1>` 
        for (let i = 0; i <= imp.length; i++) {

            Resultado.innerHTML += `<a href="./detalle-cancion.html?id=${imp[i].id}">${imp[i].title}</a>`
          }
    }
    else{  Resultado.innerHTML += `<h1 id="duki">No Encontramos Resultados de Busqueda para: ${resultados}</h1>`     

}})
.catch(function(error){
    console.log("Error: " + error);
})