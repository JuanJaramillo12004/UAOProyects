import { Paciente } from "./Paciente.js";
import { Afiliacion } from "./Afiliacion.js";

console.log("Inicio la pagina");

const btnCrearPaciente = document.getElementById("ingresar");
const btnEjecutar = document.getElementById("reporte");
const btnFiltrar = document.getElementById("filtrar");
let salida = document.getElementById("salida");
let epsDada = document.getElementById("eps").value;

let losPacientes = [];

btnCrearPaciente.addEventListener('click', ingresarNvoPaciente);
btnEjecutar.addEventListener('click', ejecutarReporte);
btnFiltrar.addEventListener('click', filtrarPorEPS(epsDada));

function ingresarNvoPaciente() {
    console.log("Entro a la funcion");
    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let peso = document.getElementById("peso").value;
    let numAfiliacion = document.getElementById("numAfiliacion").value;
    let antiguedad = document.getElementById("antiguedad").value;
    let eps = document.getElementById("eps").value;

    let suAfiliacion = new Afiliacion(numAfiliacion, eps, antiguedad);

    let nuevoPaciente = new Paciente(cedula, nombre, peso, suAfiliacion);
    losPacientes.push(nuevoPaciente);

    console.log(losPacientes);
}

function ejecutarReporte(bd){
    salida.value = "";
    for (let i = 0; i < losPacientes.length; i++){
        salida.value += losPacientes[i].toString() + "\n"
    }
}

function filtrarPorEPS(epsDada){
    salida.value = "";
    let pacientes = losPacientes.filter(pacientes => pacientes.suAfiliacion.eps === epsDada).map(pacientes => pacientes.nombre + pacientes.Afiliacion.numAfiliacion + pacientes.calcularAtencion());
    salida.value = pacientes;
}