import {llenarAsientos} from "./llenarAsientos.js"
import {reservar} from "./cambiarColor.js"
import {textReserva} from "./cambiarColor.js"


let botom = document.getElementById('boton')
botom.addEventListener("click",function(event){
    console.log("click")
})
let id = document.getElementById("id")

let asiento = document.getElementById("boton")
asiento.addEventListener("click",function(event){

    if(event.target.classList.contains("btn")){   


        console.log("....")
        reservar()
        textReserva()
    }
    
})
llenarAsientos()



