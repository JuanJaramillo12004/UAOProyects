import {Persona} from './Persona.js';

export class Estudiante extends Persona {
    // incluir constructor
    constructor(cedula, nombre, edad, suPasatiempo, codigo) {
        super(cedula, nombre, edad, suPasatiempo);
        this.codigo = codigo;
    }

    // incluir métodos propios
    calcularDedicacion() {
        let dedicacion = "";
        if (this.edad > 25) {
            dedicacion = "TOTAL";
        } else if (this.edad >= 18) {
            dedicacion = "MEDIA";
        } else {
            dedicacion = "BAJA";
        }
        return dedicacion;
    }
    
    toString() {
        return `${super.toString()}\nCódigo: ${this.codigo}`;
    }
}