/*
*  archivo main.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 17-Junio-2022
*
*  Descripción: 
*  Permite manipular los elementos de la pagina web y hacerla dinámica, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

import {obtenerIMC, calcularCicloVida} from './funciones.js';

// variable que va contando las ejecuciones
let veces=0;

// obtiene boton
const boton1 = document.getElementById("consultaBoton");
// obtiene lista chequeo
const seleccion = document.getElementById("consultaCheck");
// obtiene cada elemento de un grupo de botones
const boton1Grupo = document.getElementById("materia1");
const boton2Grupo = document.getElementById("materia2");
const boton3Grupo = document.getElementById("materia3");
// obtiene comboBox
const combo1 = document.getElementById("listaMaterias");
// obtiene boton2
const entradaBoton = document.getElementById("consultaBoton2");

// se asignan eventos
boton1.addEventListener('click',calculaIMC)
seleccion.addEventListener('change',mostrarPulsar)
boton1Grupo.addEventListener('change',mostrarPulsarGrupo)
boton2Grupo.addEventListener('change',mostrarPulsarGrupo)
boton3Grupo.addEventListener('change',mostrarPulsarGrupo)
combo1.addEventListener('change',mostrarCombo)
entradaBoton.addEventListener('click',mostrarTodo)


function calculaIMC(){
    console.log("en 1");
    veces++;
    const nombre = prompt('Introduce tu nombre');
    const peso = parseFloat(prompt('Introduce tu peso'));
    const estatura = parseFloat(prompt('Introduce tu estatura'));
    const IMC = obtenerIMC(peso,estatura);

    const res = nombre+'  tu IMC es '+IMC;
    
    // Desplega por en un parrafo y se usa innerHTML por no tener value
    document.getElementById("salidaIMC").textContent = res;

    
    // Desplega por ventana emergente
    alert(res);
    // Desplega por consola
    console.log(veces);
}

function mostrarPulsar(){
    var res='El estado será';
    if (this.checked){
        res+= ' Pulsado';
    }else{
        res+= ' NO Pulsado';
    }
    alert(res);
}

function mostrarPulsarGrupo(){
    console.log(this.value)
    alert('La opcion escogida es '+this.value);
}

function mostrarCombo(){
    const idx = combo1.selectedIndex;
    const content = combo1.options[idx].innerHTML;
    const res = 'idx:'+idx+'  La opcion escogida es '+this.value;
    console.log(res)
    alert(res);
}

function mostrarTodo(){
    const nombre = document.getElementById("consultaNombre").value;
    const edad = document.getElementById("consultaEdad").value;
    const etapa = calcularCicloVida(edad);

    const res = "Nombre:"+nombre+" es "+etapa+"<br>Edad:"+edad;
    
    // Desplega por en un parrafo  
    document.getElementById("mostrarBoton2").innerHTML = res;
}


