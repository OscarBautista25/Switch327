var lado, base, altura, radio, resultado, figuraGeometrica;
const PI = 3.1416;
figuraGeometrica = parseInt(prompt("Ingrese la figura a la que le desee encontrar el área: 1. Cuadrado 2.Triangulo 3.Circuo"));
switch (figuraGeometrica) {
    case 1:
        lado = parseFloat(prompt("Ingrese el lado del cuadrado en metros"));
        resultado=lado*lado;
        alert("El área del cuadrado es " +resultado + " metros cuadrados")
        break;
    case 2:
        base = parseFloat(prompt("Ingrese la base del triángulo en metros"));
        altura = parseFloat(prompt("Ingrese la altura del triángulo en metros"));
        resultado=(base*altura)/2;
        alert("El área del Triángulo es " +resultado + " metros cuadrados")
        break;
    case 3:
        radio = parseFloat(prompt("Ingrese el radio del circulo en metros "));
        resultado=PI*radio*radio;
        alert("El área del circulo es " +resultado + " metros cuadrados")
        break;
    default:
        alert("Opción no valida")
        break;
}