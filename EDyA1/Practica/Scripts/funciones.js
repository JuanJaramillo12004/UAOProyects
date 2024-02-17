function calcularCuotaMensual(prestamo, interes, meses) {
    return (prestamo * ((Math.pow(1+interes,meses) * interes) / (Math.pow(1+interes,meses) - 1)));
}

export {calcularCuotaMensual};