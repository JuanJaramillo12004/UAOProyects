import {Persona} from './Persona.js';

export class Empleado extends Persona {
    constructor(salario, cedula, nombre, edad, suPasatiempo) {
      super(cedula, nombre, edad, suPasatiempo);
      this.salario = salario;
    }
  
    calcularGastos() {
      if (this.suPasatiempo.frecMensual > 8) {
        return this.salario * 0.1;
      } else {
        return this.salario * 0.04;
      }
    }

    toString() {
        return `${super.toString()}\nSalario: ${this.salario}`;
    }
  }