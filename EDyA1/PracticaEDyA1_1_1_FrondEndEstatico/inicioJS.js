// para realización del item1
{
    const miLista = []
    let limite = parseInt(prompt("Cantidad de personas a evaluar", 5))

    let res ="";
    for (let i=1; i<=limite; i++){

        let nombre = prompt('Digite su nombre','Marcial')
        let peso = parseFloat(prompt('Digite su peso',65.0))
        let estatura = parseFloat(prompt('Digite su estatura',1.75))
    
    

        var imc = peso/(estatura*estatura)
        var estadoN = ""

        if (imc < 18.5){
            estadoN = 'Bajopeso'
        }else if (imc < 24.9){
            estadoN = 'Normal'
        } else{
            estadoN = 'Sobrepeso u Obeso'
        }

        console.log(imc)
        let persona = {
            nombre,
            peso,
            estatura,
            imc}
        
        // Item 2

        miLista.push()

        /* 
        miLista({
            nombre,
            peso,
            estatura,
            imc})
        */
        
        console.log(persona)
        res += nombre +'  IMC: '+imc+' EstadoNutricional: '+estadoN+'\n';
    }
    alert(res)

    let mensaje = "Lista de personas:\n"
    for (let i = 0; i < miLista.length; i++) {
        mensaje += `Nombre: ${miLista[i].nombre}, 
    Peso: ${miLista[i].peso}, 
    Estatura: ${miLista[i].estatura}, 
    Estado: ${miLista[i].estado}\n`;
    }
    alert(mensaje)
}


// Todos los numeros del arreglo info que esten entre 5 y 15
{
    let info = [10, 15, 8, 5, 7, 6, 4, 20]
    nums = info.filter(x => x>=5 && x<=15)
    console.log(nums)
}
let res2 = info.filter(dato => dato >= 5).filter(dato => dato <= 15)

// Crear objeto

let jugador = {
    nombre : 'Cristiano',
    dorsal : 7,
    posicion : 'delantero',
    goles : 875
}

