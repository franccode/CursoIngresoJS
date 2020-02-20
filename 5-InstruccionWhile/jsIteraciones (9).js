function mostrar() {
	var contador = 0;
	var maximo = 0;
	var minimo = 0;
	var respuesta;
	var numero;
	var flag = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}

		//me fijo si es maximo o minimo
		if (flag == 0 || numero > maximo){
			maximo = numero;
		}
		if (flag == 0 || numero < minimo){
			minimo = numero;
			flag = 1;
		}
		respuesta = prompt("Desea seguir ingresando? ");
	}while (respuesta =='s');
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;

}