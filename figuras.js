
// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
function perimetroTriangulo(lado1, lado2, Base) {
    return lado1 + lado2 + Base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio del círculo
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diametro del círculo
console.log("El diametro del círculo es: " + diametroCirculo + " cm");

// Pi = 3.1416
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

// Circunferencia del círculo
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área del círculo
function areaCirculo(radio) {
    return PI * radio * radio;
}

console.groupEnd();