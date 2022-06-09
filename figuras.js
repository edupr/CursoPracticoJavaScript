
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
    return Number(lado1) + Number (lado2) + Number (Base);
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

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");

console.log("El diametro del círculo es: " + diametroCirculo + " cm");

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

// Aquí interactuamos con el HTML

// Código del cuadrado
function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
}

// Código del triángulo
function calcularPerimetroTriangulo(params) {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro)
}

function calcularAreaTriangulo(params) {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;

    const area = areaTriangulo(value1, value2, value3);
    alert(area)
}

// Código del círculo
function calcularPerimetroCirculo(params) {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo(params) {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}
