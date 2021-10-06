var circulo, rectangulo, triangulo
var pi = Math.PI;

do {

eleccionu = prompt("Escoja una de las operaciones: 1. Circulo <br> 2. Rectangulo <br> 3. Triangulo 4. Salir").toUpperCase();


if (eleccionu == "CIRCULO" || eleccionu == "RECTANGULO" || eleccionu == "TRIANGULO" || eleccionu == "SALIR"){

if (eleccionu == "CIRCULO"){

    radio = prompt("Escriba el radio del circulo: ");
    circulo = pi * (radio * radio);
    alert("El area del circulo es: " + circulo.toFixed(2));
    document.write("El area del circulo es: " + circulo.toFixed(2));
    document.write("<br>");

}

if (eleccionu == "RECTANGULO"){

    base = prompt("Escriba la base el rectangulo: ");
    altura = prompt("Escriba la altura del rectangulo: ");
    rectangulo = base * altura;
    alert("El area del rectangulo es: " + rectangulo);
    document.write("El area del rectangulo es: " + rectangulo);
    document.write("<br>");

}

if (eleccionu == "TRIANGULO"){

    base = prompt("Escriba la base del triangulo: ");
    altura = prompt("Escriba la altura del triangulo: ");
    triangulo = (base * altura)/2;
    alert("El area del triangulo es: " + triangulo);
    document.write("El area del triangulo es: " + triangulo);
    document.write("<br>");

}
}
else {

    alert("El dato ingresado no es correcto! Recuerde escribir solo numeros.")
    location.reload();

}

} while (eleccionu != "SALIR");