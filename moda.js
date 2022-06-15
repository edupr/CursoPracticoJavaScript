const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
        lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoB[1] - elementoA[1];
    }
);

const moda = lista1Array[0][0];
console.log("lista1Array", lista1Array);
console.log("moda: ", moda);

function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
            listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoB[1] - elementoA[1];
        }
    );
    const moda = listaArray[0][0];
    return moda;
}

console.log("Moda de lista1: ", calcularModa(lista1));