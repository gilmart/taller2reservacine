import { llenarAsientos} from "./llenarAsientos.js";



export function reservar(){

       document.getElementById('boton').addEventListener("click", function() {
              textReserva()
       })
}

export function textReserva(texto){
       texto = "reservado asiento"
       document.getElementById("demo").innerHTML = texto
}



/*
export function cambiarColor(color){

       document.getElementById('boton').style.backgroundColor = color
}

export function elegirColor(){

       cambiarColor('red')
       console.log("tratando de cambiar color") 
}
*/
