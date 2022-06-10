function calculo(params) {
    const a = parseInt(document.getElementById("input1").value);
    const b = parseInt(document.getElementById("input2").value);
    const c = parseInt(document.getElementById("input3").value);
 
    if (a == 0 || b == 0 || c == 0) {
        alert("No se puede calcular");
    }
    else {
        if (a == b && b == c) {
            alert("Triángulo equilátero");
        }
        else if (a == b || b == c || a == c) {
            const altura = Math.sqrt(a**2 + b**2);
            alert("El triángulo es isósceles y su altura es: " + altura);
        }
        else {
            alert("El triángulo es escaleno");
        }
    }
}