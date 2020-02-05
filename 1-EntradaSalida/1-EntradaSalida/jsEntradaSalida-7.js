/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
    var numero2;
    var enteroN1;
    var enteroN2;
    var result;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    enteroN1 = parseInt(numero1);
    enteroN2= parseInt(numero2);
    result = enteroN1 + enteroN2;
    alert(result);
}

function restar()
{
	var numero1;
    var numero2;
    var enteroN1;
    var enteroN2;
    var result;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    enteroN1 = parseInt(numero1);
    enteroN2= parseInt(numero2);
    result = enteroN1 - enteroN2;
    alert(result);
}

function multiplicar()
{ 
	var numero1;
    var numero2;
    var enteroN1;
    var enteroN2;
    var result;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    enteroN1 = parseInt(numero1);
    enteroN2= parseInt(numero2);
    result = enteroN1 * enteroN2;
    alert(result);
}

function dividir()
{
	var numero1;
    var numero2;
    var enteroN1;
    var enteroN2;
    var result;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    enteroN1 = parseInt(numero1);
    enteroN2= parseInt(numero2);
    result = enteroN1 / enteroN2;
    alert(result);
}

