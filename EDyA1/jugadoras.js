{
let data = [{ nombre:'Linda', dorsal: 10, goles: 20}, 
           { nombre:'Catalina', dorsal: 11, goles: 30}, 
           { nombre:'Leicy', dorsal: 10, goles: 5}, 
           { nombre:'Maira', dorsal: 9, goles: 15}, 
           { nombre:'Manuela', dorsal: 2, goles: 6}, 
           { nombre:'Diana', dorsal: 4, goles: 3}, 
           { nombre:'Maria Camila', dorsal: 22, goles: 7}] 

function solucion1(info){
   info.forEach(x => console.log(`Nombre: ${x.nombre}, Dorsal: ${x.dorsal}`))
}

solucion1(data)


function solucion2(info, cantidad){
   cantidad = parseInt(prompt('Digite el numero de goles', 3))
   info.forEach(x => {if(x.goles >= cantidad){
      console.log(`Nombre: ${x.nombre}, Dorsal: ${x.dorsal}, Goles: ${x.goles}`)
   }

   })
}

solucion2(data)

function solucion3(info){
   info.forEach(x => console.log(`Dorsal: ${x.dorsal}`))
   info.map(x => console.log(`Dorsal Modificado: ${x.dorsal-2}`))
}

solucion3(data)

function solucion4(info, cantidad){
   limite1 = parseInt(prompt('Digite el limite inferior de goles', 3))
   limite2 = parseInt(prompt('Digite el limite superior de goles', 3))
   info.forEach(x => {if(x.goles >= limite1 && x.goles <= limite2){
      console.log(`Nombre: ${x.nombre}, Dorsal: ${x.dorsal}, Goles: ${x.goles}`)
   }

   })
}

}
