import {Pasatiempo} from './Pasatiempo.js';

export class Persona {
    // incluir parametros necesarios
    constructor(cedula, nombre, edad, suPasatiempo) {
        this.cedula = cedula;
        this.nombre = nombre;        
        this.edad = edad;
        this.suPasatiempo = suPasatiempo;
    }  

    calcularPorcFelicidad() {
        let multiplicador = 1.5;
        if (this.suPasatiempo.nombre === 'Futbol' || this.suPasatiempo.nombre === 'Lectura') {
            multiplicador = 2.5;
        } else if (this.edad < 30) {
            multiplicador = 1.8;
        }
        return this.suPasatiempo.frecMensual * multiplicador;
    } 

    toString() {
        return "Cedula:" + this.cedula + " nombre:" + this.nombre + " edad:" + this.edad + " Pasatiempo:" + this.suPasatiempo.toString();
    }    
}

