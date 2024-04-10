import {TarjetaProfesional} from './TarjetaProfesional.js';

export class Ingeniero {
    // crear constructor
    constructor(cedula, nombre, salario, suTarjeta){
        this.cedula = cedula;
        this.nombre = nombre;
        this.salario = salario;
        this.suTarjeta = suTarjeta;
    }

    // crear método calcularPreparacion
    calcularPreparacion() {
        let res = "";
        if (this.salario > 5000000.5) {
            res = "EXCELENTE";
        } else if (this.universidad === "Univalle" && this.salario < 4500000.0) {
            res = "BUENA";
        } else {
            res = "MALA";
        }
        return res;
    }

    toString() {
        // construir cadena de salida
        return "Cedula: " + this.cedula +
               " Nombre: "+ this.nombre +
               " Salario: "+ this.salario +
               " Tarjeta Profesional: " + this.suTarjeta
    }
}