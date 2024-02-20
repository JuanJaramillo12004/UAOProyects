function calcularCuotaMensual(pres, month) {
    const inte = 0.1;
    return (pres * ((Math.pow(1+inte,month) * inte) / (Math.pow(1+inte,month) - 1)));
}

function filtroOpcion(valor){
    const cadena = "El filtro seleccionado es la " + valor;
    return cadena;        
}

export {calcularCuotaMensual, filtroOpcion}