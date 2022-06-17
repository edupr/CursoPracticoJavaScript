function calcular() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var tasa = parseInt(document.getElementById("tasa").value);
    var plazo = parseInt(document.getElementById("plazo").value);
    var reinvertir = document.getElementById("reinvertir").value;
    var today = new Date();
    var gananciaPorDia = (tasa / 100) / 365;
    var gananciaPorPlazo = gananciaPorDia * plazo;
    var iteraciones = 12;

    // console.log(cantidad, tasa, plazo, gananciaPorDia, gananciaPorPlazo, reinvertir, today);
    console.log("----------------");

    for (var i = 0; i <= iteraciones; i++) {
        console.log(today.toLocaleDateString(), " $", cantidad.toFixed(2));
        // console.log(today, cantidad);
        actualDate = today.setDate(today.getDate()+plazo);
        cantidad = (cantidad + (cantidad*gananciaPorPlazo));
    }
};
