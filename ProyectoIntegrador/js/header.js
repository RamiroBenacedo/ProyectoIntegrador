let formulario = document.querySelector(".BusquedaCanciones")

let cosa = document.querySelector(".pizza")

formulario.addEventListener('submit' ,function(e) {
    e.preventDefault();
    if (cosa.value == "") {
        
   alert("No escribiste que deseas buscar")
     
    }
    else if (cosa.value.length <3){
        e.preventDefault();
        alert("Debes escribir mas de 3 caracteres para que podamos realizar la busqueda")
    }
else{
    this.submit()
}
})