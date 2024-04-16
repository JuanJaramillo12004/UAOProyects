export class TarjetaProfesional {
    constructor(nroMatricula, carrera, universidad) {
        this.nroMatricula = nroMatricula;
        this.carrera = carrera;
        this.universidad = universidad;
    }  

    toString() {
        return "TarjetaProfesional:" + this.nroMatricula +
            "  Carrera:" + this.carrera +
            "  Universidad:" + this.universidad;
    }    
}

