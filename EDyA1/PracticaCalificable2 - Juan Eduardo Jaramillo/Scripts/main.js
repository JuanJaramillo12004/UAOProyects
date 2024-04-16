//JUAN EDUARDO JARAMILLO - 2221274
import {Reparacion} from './Reparacion.js';
import {Vehiculo} from './Vehiculo.js';

// obtiene referencias a los botones y areas de texto de la pagina HTML
const btnIngresar = document.getElementById("ingresar");
const btnConsultar = document.getElementById("consultar");
let aTSalida = document.getElementById("respuesta");

let losVehiculos = [];

// se asignan eventos
btnIngresar.addEventListener('click',ingresarNuevoVehiculo);
btnConsultar.addEventListener('click',ejecutarReporte);


function ingresarNuevoVehiculo(){
    let placa = document.getElementById("laPlaca").value;
    let modelo =  parseInt(document.getElementById("elModelo").value);
    let velocidad = parseFloat(document.getElementById("laVelocidad").value);
    let reparacion = parseInt(document.getElementById("elNroReparacion").value);
    let causa = document.getElementById("laCausa").value;
    let procedimiento = document.getElementById("elProcedimiento").value;
    
    // a) crear objReparacion
    let objReparacion = new Reparacion(reparacion,causa,procedimiento);
    
    // b) crear objVehiculo
    let objVehiculo = new Vehiculo(placa,modelo,velocidad,objReparacion);

    // c) insertar objVehiculo al inicio del arreglo losVehiculos
    losVehiculos.unshift(objVehiculo);

    // d) usando la referencia aTSalida, desplegar el toString de objVehiculo
    aTSalida.value = objVehiculo.toString()
}

function ejecutarReporte(){   
    let laCausa = document.getElementById("laCausa").value;
    
    // a) invocar a filtrarPorCausa y almacenar el resultado en res 
    let res = filtrarPorCausa(losVehiculos,laCausa);

    // b) usando la referencia aTSalida, desplegar el valor almacenado en res
    aTSalida.value = res
}

function filtrarPorCausa(bd,causaDada){  
    // a) actualizar el texto inicial de la cadena res  
    let res = 'los Vehiculos reparados por ' + causaDada + ' son:\n';

	// b) recorrer el arreglo y obtener lo solicitado
    bd.filter(vehiculo => {
        if(vehiculo.suReparacion.causa === causaDada){
            res += `Placa:${vehiculo.placa} Reparacion:${vehiculo.suReparacion.nroReparacion} Estado:${vehiculo.calcularEstado()} \n`
        }
    });

    return res;
}
