import { Afiliacion } from "./Afiliacion.js";
export class Paciente{
    constructor(cedula, nombre, peso, suAfiliacion){
        this.cedula = cedula;
        this.nombre = nombre;
        this.peso = peso;
        this.suAfiliacion = suAfiliacion;
    }

    toString(){
        return "Cedula:"+this.cedula +" Nombre: " + this.nombre + " Peso:" + this.peso + " "+ this.suAfiliacion.toString();
    }

    calcularAtencion(){
        if (this.peso > 90.5) {
            return "BUENA"
        }else if (this.peso > 80.5 && this.suAfiliacion.eps === "comfenalco") {
            return "MEDIA";
        } else {
            return "LIMITADA";
        }
    }
}