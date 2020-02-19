function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	//while(!(numero >= 0 && numero <= 9)){  //a)
	while (numero < 0 || numero > 9 || isNaN (numero)){ //b) (isNaN = es no numero)
		numero = parseInt(prompt("Error. Reingrese un numero"));
	}
	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN

//a) mientras el numero no este entre 0 y 9
//b) mientras el numero sea menor a 0 o mayor a nueve o no sea un numero 

//EJERCIOCIO QUE PIDE CLAVE -> while(!(clave == "utn750"))
//a) mientras la clave no es utn750
//b) mientas la clave sea distinta de utn750 