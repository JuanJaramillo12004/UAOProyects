//import { create } from 'domain';
//import objectAssign from 'object-assign';
import {calcularPrestamoMaximo} from './computos.js';

// obtiene boton
const boton = document.getElementById("ejecutar");

// addEventListener a la referencia boton para que cuando se dé el evento click 
// se ejecute la función procesarEntrada
boton.addEventListener('click',procesarEntrada)

let infoPrestamos = [];

function procesarEntrada(){
    // capturar los datos proporcionados desde la página web
    const asociado = document.getElementById("elAsociado").value;
    const aportes = parseInt(document.getElementById("losAportes").value);
    const tipoPrestamo = document.getElementById("elTipoPrestamo").value;
    // calcular el préstamo máximo que tendría un asociado
    const prestamoMaximo = calcularPrestamoMaximo(aportes, tipoPrestamo);
    // desplegar la salida en el área de texto presentada en la GUI.
    if (prestamoMaximo !== 0){
        document.getElementById("laRespuesta").value = `${asociado} tiene aportes de ${aportes}, se le presta maximo ${prestamoMaximo} para ${tipoPrestamo}`;
    } else {
        document.getElementById("laRespuesta").value = "No se puede calcular el prestamo maximo";
    }
    // crear un objeto con las siguientes propiedades: asociado, aportes,  tipoPrestamo y prestamoMaximo
    // y almacenarlo al inicio de la lista infoPrestamos
    const prestamo = {
        asociado: asociado,
        aporte: aportes,
        tipoPrestamo: tipoPrestamo,
        prestamoMaximo: prestamoMaximo};
    infoPrestamos.shift(prestamo);
    // desplegar por consola el arreglo infoPrestamos
    console.log(infoPrestamos) 
}