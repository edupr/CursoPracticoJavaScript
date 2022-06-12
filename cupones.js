// const precioOriginal = 120;
const descuento = 18;
var descuentoCupon = 0;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    return precioConDescuento;
}

const posiblesCupones = [
    "CUPON10",
    "CUPON20",
    "CUPON30",
    "CUPON40",
];

function hayCupon() {
    const inputCoupon = document.getElementById("inputCoupon");
    const cuponValue = inputCoupon.value;
    descuentoCupon = 0;

    // for debug purposes
    console.log(cuponValue);
    console.log(posiblesCupones);

    const esCuponValido = posiblesCupones.includes(cuponValue);
    console.log(esCuponValido);

    if (esCuponValido) {
        const ResultP = document.getElementById("ResultP");
        descuentoCupon = Number(cuponValue.substring(5));
    }
}

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    hayCupon();

    const ResultP = document.getElementById("ResultP");
    const precioFinal = precioConDescuento - descuentoCupon;

    // for debug purposes
    console.log("Precio original:      $", priceValue);
    console.log("Descuento:           -$", (priceValue*discountValue/100));
    console.log("Descuento del cupón: -$", descuentoCupon);
    console.log("--------------------------$");
    console.log("PRECIO FINAL:         $", precioFinal);
    
    // Aplicación del cupon

    ResultP.innerText = "El precio final es: $" + precioFinal;
}