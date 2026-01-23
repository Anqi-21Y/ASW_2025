document.getElementById("padres").addEventListener("click",function(e){
    console.log("Click en el Padre");
    
});

document.getElementById("hijos").addEventListener("click",function(e){
    console.log("Click en el hijos");
    e.stopPropagation();
});

document.getElementById("boton").addEventListener("click",function(e){
    console.log("Click en el botón");
    //e.stopPropagation(); Prevenir deliberadamente que el incidente se propague más.
});