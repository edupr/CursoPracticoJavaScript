function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        });


    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista1 = [6, 5, 3, 1, 10, 8];
    const mitadLista1 = parseInt(lista1.length / 2);
    console.log("Lista 1: " + lista1);
    console.log("Lista ordenada: ", lista1.sort(function (a, b) { return a - b; }));

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;


if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica ([
        elemento1,
        elemento2
    ]);
    mediana = promedioElemento1y2;
    console.log("Mediana: ", mediana);
}
else {
    mediana = lista1[mitadLista1];
    console.log("Mediana: ", mediana);
};
