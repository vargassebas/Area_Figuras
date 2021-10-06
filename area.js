var circulo, rectangulo, triangulo;
var pi = Math.PI;

document.write('<h2>Operaciones que han sido realizadas: </h2>');
document.write('<br>');
do {
	eleccionu = prompt(
		'Escoja una de las operaciones:\n1. Circulo\n2. Rectangulo\n3. Triangulo\n4. Salir'
	).toUpperCase();

	if (eleccionu == 1 || eleccionu == 2 || eleccionu == 3 || eleccionu == 4) {
		if (eleccionu == 1) {
			radio = prompt('Escriba el radio del circulo: ');
			circulo = pi * (radio * radio);
			alert('El area del circulo es: ' + circulo.toFixed(2));
			document.write('El area del circulo es: ' + circulo.toFixed(2));
			document.write('<br>');
		}

		if (eleccionu == 2) {
			base = prompt('Escriba la base el rectangulo: ');
			altura = prompt('Escriba la altura del rectangulo: ');
			rectangulo = base * altura;
			alert('El area del rectangulo es: ' + rectangulo);
			document.write('El area del rectangulo es: ' + rectangulo);
			document.write('<br>');
		}

		if (eleccionu == 3) {
			base = prompt('Escriba la base del triangulo: ');
			altura = prompt('Escriba la altura del triangulo: ');
			triangulo = (base * altura) / 2;
			alert('El area del triangulo es: ' + triangulo);
			document.write('El area del triangulo es: ' + triangulo);
			document.write('<br>');
		}
	} else {
		alert('El dato ingresado no es correcto! Recuerde escribir solo numeros.');
		location.reload();
	}
} while (eleccionu != 4);
