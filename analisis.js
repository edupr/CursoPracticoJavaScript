
// Helper functions
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        const personitaMitad = lista[mitad];
        return mediana;
    } else {
        return lista[mitad];
    }
}

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

console.log("Mediana de salarios en Colombia: " + medianaGeneralCol);

// Mediana del top 10% de salarios
const spliceStart = (salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;



const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);
console.log("salariosColTop10: " + salariosColTop10);