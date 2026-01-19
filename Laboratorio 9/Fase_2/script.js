const body = document.getElementById("main-body");

body.addEventListener("keydown",function(e){
    console.log("Tipo de evento:", e.type);
    console.log("Tecla de pulsada: ", e.key);
});