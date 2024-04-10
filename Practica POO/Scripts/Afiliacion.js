export class Afiliacion {
    constructor(numAfiliacion, eps, antiguead) {
        this.numAfiliacion = numAfiliacion;
        this.eps = eps;
        this.antiguead = antiguead;
    }

    toString() {
        return "Afiliacion:" +this.numAfiliacion + " EPS:" +this.eps +" Antiguedad:" +this.antiguead;
    }
}