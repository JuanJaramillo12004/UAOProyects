import { calcularCuotaMensual } from './funciones';
import * as funcion from './funciones,js';

const nombre = document.getElementById("nombre");
const prestamo = parseFloat(document.getElementById("prestamo"));
const meses = parseInt(document.getElementById("meses"));
const interes = parseFloat(document.getElementById("interes"));

let cuota = calcularCuotaMensual(prestamo, interes, meses)

const resultado = document.getElementById("resultado");
resultado.textContent = `${nombre} debe pagar $ cuota cada mes por el préstamo de ${prestamo} a n meses con el interés del ${interes}%`;