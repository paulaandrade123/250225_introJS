let miTexto = document.getElementById("text1")
let miBoton = document.getElementById("boton1")


miBoton.addEventListener("click", function(){
    console.log("Hola")
    miBoton.style.backgroundColor="purple"
    miTexto.textContent="Gracias"
})
//comentario una linea
/*comentario
varias 
lineas cuando se haga click se debe tomar el texto del cuadro de texto
y en una division mostrar cuantas letras tiene el texto y un abecedario con # y letra */

//crear una aplicacion donde se tengan 2 mapas leaflet 