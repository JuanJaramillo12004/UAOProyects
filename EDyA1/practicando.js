let laAsesora ={
    nombre: "Andrea Rios",
    antiguedad: 5,
    educacion:{
        profesion: "Ingenieria",
        institucion:"UAO",
        añoGraduacion: 2021}
}

delete laAsesora.educacion.profesion

let data = [{ codigo:12231, nombre: "Juan", nota: 2.4}, 
           { codigo:12232, nombre: "Carlos", nota: 3.5}, 
           { codigo:12233, nombre: "Nicolas", nota: 3.2}, 
           { codigo:12234, nombre: "Andres", nota: 1.0}, 
           { codigo:12235, nombre: "Alejandro", nota: 2.9}, 
           { codigo:12236, nombre: "Santiago", nota: 3.0}, 
           { codigo:12237, nombre: "Michael", nota: 4.8}] 

let notaLimite = 3.0

function filtrarMejoresNotas(info, notaLimite){
    return info.filter(x => x.nota > notaLimite).map(x=> x.codigo)
}
filtrarMejoresNotas(data, notaLimite)

function filtrarMejoresNotas(info, notaLimite){
    info.forEach(x => {if(x.nota > notaLimite){
        console.log(`Codigo: ${x.codigo}`)
}})
}
filtrarMejoresNotas(data, notaLimite)

const enlace = document.getElementById("btn_ejecutar");
enlace.addEventListener('click',procesarAlumno);

http://localhost:400/myPageA
http://localhost:400/ejecuta

