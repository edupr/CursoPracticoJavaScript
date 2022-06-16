// Función para calcular el promedio geométrico de una serie de números
// Se define como la raíz índice n del producto de n términos.
// La media geométrica se utiliza con más frecuencia para calcular la tasa
// de crecimiento porcentual promedio de algunas series dadas, a través del tiempo.



function promedioGeometrico(numeros) {
    const listaNumeros = parseInt(document.getElementById("inputLista").value); // Lista de números

    var suma = 0;
    var producto = 1;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        producto *= numeros[i];
    }
    // console.log(`Lista de números:    ${listaNumeros}`);
    // console.log("Suma de números:     " + suma);
    // console.log("Producto de números: " + producto);
    return Math.pow(producto / suma, 1 / numeros.length);
}

function calcular(params) {
    const listaNumeros2 = parseInt(document.getElementById("inputNumeros").value); // Lista de números
    console.log("lista de num: ", listaNumeros2);
    console.log("¡¡Promedio Geométrico: ", promedioGeometrico(listaNumeros2));
    // promedioGeometrico(listaNumeros2);
}

