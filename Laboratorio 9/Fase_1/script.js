// obtener btn
const boton = document.getElementById("btn_mult");

// define un funcio 
function primeroFuncion (){
    console.log("Se ejecut la primera funcion");
}

//define otro

function otroFuncion (){
    console.log("Se ejecuto la otra funcion");
}

//registrar dos eventos

boton.addEventListener("click",primeroFuncion);
boton.addEventListener("click",otroFuncion);