function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);
if (!(edad < 13 || edad > 17)){   //Si la edad no esta fuera del rango
    alert("Es adolecente");
    }

/*if (edad >= 13 && edad <= 17){ //Si la edad esta dentro del rango
    alert("Es adolecente");
    }*/  



}//FIN DE LA FUNCIÓN