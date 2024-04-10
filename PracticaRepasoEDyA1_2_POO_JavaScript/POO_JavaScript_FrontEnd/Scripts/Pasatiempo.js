export class Pasatiempo {
    constructor(nombre, aseguradora, valor) {
        this.nombre = nombre;
        this.aseguradora = aseguradora;
        this.valor = valor;
    }  

    toString() {
        return "Numero:" + this.numero +
            "  Aseguradora:" + this.aseguradora+
            "  Valor:" + this.valor;
    }    
}
