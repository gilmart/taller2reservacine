export function llenarAsientos(){
    
    let llenadoAsientos = [
        {id:1, nombre: "1"},
        {id:2, nombre: "2"},
        {id:3, nombre: "3"},
        {id:4, nombre: "4"},
        {id:5, nombre: "5"}
    ]

    let botomAsiento=document.getElementById("boton")
    llenadoAsientos.forEach(function(asiento){
        
        let columna=document.createElement("div")
        columna.classList.add("w-100")  
        columna.classList.add("overflow-x")
        columna.classList.add("white-space","nowrap")

        /*
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-10", "d-inline-block")
        */

        let boton=document.createElement("button-group")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-success")
        //boton.classList.add("btn","btn-xs")
        boton.textContent= asiento.nombre

        botomAsiento.appendChild(boton)
        botomAsiento.appendChild(columna)

    })





}