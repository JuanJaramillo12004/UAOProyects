// Adicionar funcion calcularPrestamoMaximo(aportes, tipoPrestamo)
function calcularPrestamoMaximo(aportes, tipoPrestamo){
    let porcentajeMaximo = 0;
    
    //Determinar el porcentaje maximo segun el tipo de prestamo
    switch(tipoPrestamo){
        case "Libre inversion":
            porcentajeMaximo = 0.80
            break;
        case "Educacion":
            porcentajeMaximo = 0.905
            break;
        case "Vivienda":
            porcentajeMaximo = 0.955
            break;
        default:
            console.log("Tipo de prestamo no valido")
            return 0
    }

    //Calcular el prestamo maximo
    const prestamoMaximo = aportes * porcentajeMaximo;
    return prestamoMaximo;
}
export {calcularPrestamoMaximo};