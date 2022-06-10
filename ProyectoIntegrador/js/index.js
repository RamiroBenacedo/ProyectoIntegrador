alert("hola")

let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart';

let contenedor = '';

fetch(url)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data.results);
        let canciones = data.results;
        contenedor = document.querySelector('.container');
        for (let i = 0; i < canciones.lenght; i++){
        contenedor.innerHTML += `<article>
        <img src = ${canciones[i].link} alt=''/>
         <p>Name:  ${canciones[i].title} </p>
         <p>Status: ${canciones[i].name} </p>
</article>`
        }
    })
    .catch(function(error){
        console.log("Error: " + error);
    })