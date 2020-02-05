/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var numero1;
    var numero2;
    var result;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    result = numero1 + numero2;
    alert(result);
}



function restar() {
    var numero1;
    var numero2;
    var result;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    result = numero1 - numero2;
    alert(result);
}

function multiplicar() {
    //Declaro las variables
    var numero1;
    var numero2;
    var result;
    //Guardo en memoria los datos de la caja de texto
    //Previamente los paso a entero
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    result = numero1 * numero2;
    //Muestro el resultado
    alert(result);
}

function dividir() {
    var numero1;
    var numero2;
    var result;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    result = numero1 / numero2;
    alert(result);
}

