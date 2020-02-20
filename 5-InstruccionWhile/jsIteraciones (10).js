function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 0;
	var numero = 0;
	var flag = 0;
	var contPositivo = 0;
	var contNegativo = 0;
	var pares = 0;
	var impares = 0;
	var promPos = 0;
	var promNeg = 0;

	var dif = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if (numero >= 0) {
			positivo = positivo + numero;
			contPositivo++;


		} else {
			negativo = negativo * numero;
			contNegativo++;
			flag = 1;
		}
		if (numero % 2) {               //Calculo pares e impares
			pares++;
		} else {
			impares++;
		}

		promPos = positivo / contPositivo;
		promNeg = negativo / contNegativo;

		dif = positivo - negativo;

		respuesta = prompt("Quiere continuar ingresando numeros?")
	}while (respuesta == 's');

	if (flag == 0) {
		negativo = 0;
	}
	document.write("La cantidad de positivos es: " + contPositivo +"</br>");
	document.write("La cantidad de negativos es: " + contNegativo)+"</br>" ;
	document.write("La suma de los positivos es: " + positivo);
	document.write("La suma de los negativos es: " + negativo);
	document.write("La cantidad de numeros pares es: " + pares);
	document.write("La cantidad de numeros impares es: " + impares);
	document.write("El promedio de los positivos es: </br>" + promPos);
	document.write("El promedio de los negativos es :</br>" + promNeg);





	//document.getElementById('suma').value = positivo;
	//document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN