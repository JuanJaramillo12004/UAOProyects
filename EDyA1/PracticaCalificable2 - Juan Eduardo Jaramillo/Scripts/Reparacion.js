//JUAN EDUARDO JARAMILLO - 2221274
export class Reparacion {
    constructor(nroReparacion, causa, procedimiento) {
        this.nroReparacion = nroReparacion;
        this.causa = causa;
        this.procedimiento = procedimiento;
    }  

    toString() {
        return "Reparacion:" + this.nroReparacion +
            "  Causa:" + this.causa +
            "  Procedimiento:" + this.procedimiento;
    }    
}