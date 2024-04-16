import {TarjetaProfesional} from './TarjetaProfesional.js';
import {Ingeniero} from './Ingeniero.js';

// obtiene referencias a los botones y areas de texto de la pagina HTML
const btnIngresar = document.getElementById("ingresar");
const btnConsultar = document.getElementById("consultar");
let aTSalida = document.getElementById("respuesta");

let losIngenieros = [];

// se asignan eventos
btnIngresar.addEventListener('click',ingresarNuevoIngeniero);
btnConsultar.addEventListener('click',ejecutarReporte);


function ingresarNuevoIngeniero(){
    let cedula = parseInt(document.getElementById("laCedula").value);
    let nombre = document.getElementById("elNombre").value;
    let salario = parseFloat(document.getElementById("elSalario").value);
    let tarjeta = parseInt(document.getElementById("laMatricula").value);
    let carrera = document.getElementById("laCarrera").value;
    let universidad = document.getElementById("laUniversidad").value;
    
    // a) crear objTarjeta
    let objTarjeta = new TarjetaProfesional(tarjeta, carrera, universidad);

    // b) crear objIngeniero
    let objIngeniero = new Ingeniero(cedula, nombre, salario, objTarjeta);

    // c) insertar objIngeniero al inicio del arreglo losIngenieros
    losIngenieros.unshift(objIngeniero);

    // d) usando la referencia aTSalida, desplegar el toString de objIngeniero
    aTSalida.value = objIngeniero.toString();
}

function ejecutarReporte(){   
    let laUniversidad = document.getElementById("laUniversidad").value;
    
    // a) invocar a filtrarPorUniversidad y almacenar el resultado en res 
    let res = filtrarPorUniversidad(losIngenieros, laUniversidad);

    // b) usando la referencia aTSalida, desplegar el valor almacenado en res
    aTSalida.value = res;
}

function filtrarPorUniversidad(bd,universidadDada){  
    // a) actualizar el texto inicial de la cadena res
    let res = "Los Ingenieros de la Universidad " + universidadDada + " son:\n";

	// b) recorrer el arreglo y obtener lo solicitado
    bd.filter(ingeniero => {
        if(ingeniero.suTarjeta.universidad === universidadDada){
            res += `Nombre: ${ingeniero.nombre} Tarjeta: ${ingeniero.suTarjeta.nroMatricula} Preparación: ${ingeniero.calcularPreparacion()} \n`
        }
    });
    
    return res;
}