const textarea = document.getElementById("text_area");

//reagisrtar el evento keydown en el textaea
textarea.addEventListener("keydown", function(e){

    //condicional
    if(e.key >= "0" && e.key <= "9"){

        e.preventDefault();

        // mostrar mensaje de alert
        alert("Error : no se permiten numeros en este campo");
    }
});