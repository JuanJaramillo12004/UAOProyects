import {calcularCuotaMensual, filtroOpcion} from './funciones.js';

const boton1 = document.getElementById("enviar");
const boton2 = document.getElementById("reporte");
const combo1 = document.getElementById("listaFiltrado");

boton1.addEventListener('click',reflejarResultado);
boton2.addEventListener('click',mostrarFiltrado);
//combo1.addEventListener('change',mostrarFiltrado);

let miLista = []

function reflejarResultado(){
    const name = document.getElementById("nombre").value;
    const pres = parseFloat(document.getElementById("prestamo").value);
    const month = parseInt(document.getElementById("meses").value);

    const res = calcularCuotaMensual(pres, month)
    alert(`Resultado: ${name} debe pagar una cuota de $${res} cada mes por el préstamo de ${pres} a ${month} meses con el interés del 10%`);    // Desplega por en un parrafo  
    document.getElementById("resultado").textContent = `Resultado: ${name} debe pagar una cuota de $${res} cada mes por el préstamo de ${pres} a ${month} meses con el interés del 10%`;
}

function mostrarFiltrado(){
    const idx = combo1.selectedIndex;
    const valor = combo1.value
    const res = filtroOpcion(valor);
    const result = 'idx:'+idx+'  La opcion escogida es '+res;
    document.getElementById("resultado").textContent = "Filtro realizado: " + res;
    alert(result);
}

