function mostrar()
{
//tomo la edad  
var edad;
    edad = parseInt(document.getElementById("edad").value);
    if (edad >= 13 && edad <= 18){
        alert("Es adolecente");
    }
    else if (edad >= 18){
        alert ("Es mayor de edad");
    }
    else {
        alert("Es niñe");
    }  
/*if (edad < 13){
    alert("Niñe");
}
else if (edad <= 17){
    alert("Adolecente");
}
else{
    alert("Adulto");
}
}*/



}//FIN DE LA FUNCIÓN