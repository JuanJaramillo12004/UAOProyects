//JUAN EDUARDO JARAMILLO - 2221274
import {Reparacion} from './Reparacion.js';

export class Vehiculo {
    // crear constructor
    constructor(placa, modelo, velocidad, suReparacion) {
        this.placa = placa;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.suReparacion = suReparacion;
    }  

    // crear funcion calcularEstado
    calcularEstado(){
        let res ="";
        if (this.modelo > 2015){
            res = "BUENA";
        } else if (this.suReparacion.causa == "Pintura" && this.modelo > 2009){
            res = "REGULAR";
        } else {
            res = "DEFICIENTE";
        }
        return res;
    }

    toString() {
        // construir cadena de salida
        return "Placa: " + this.placa +
                " Modelo: "+ this.modelo +
                " Velocidad: "+ this.velocidad +
                " Reparacion: " + this.suReparacion.toString()
    }    
}          

