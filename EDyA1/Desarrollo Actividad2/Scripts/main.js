import * as functions from "./functions.js";

// Botones de acción
document.getElementById("botonEvaluar").addEventListener('click',infoPrestamo) //Obtiene el boton y Funcion del boton
document.getElementById("botonMostrar").addEventListener('click',listarInfo)
document.getElementById("botonA").addEventListener('click',a)
document.getElementById("botonB").addEventListener('click',b)
document.getElementById("botonC").addEventListener('click',c)
document.getElementById("botonD").addEventListener('click',d)
document.getElementById("botonE").addEventListener('click',e)
document.getElementById("botonF").addEventListener('click',f)
document.getElementById("botonG").addEventListener('click',g)
document.getElementById("botonH").addEventListener('click',h)

let miLista = []

function infoPrestamo(){
    document.getElementById("cajaResultado").textContent = functions.añadirPrestamo(miLista)
}

function listarInfo(){ 
    document.getElementById("cajaInfo").textContent = functions.reporteTotal(miLista)
}

function a(){
    document.getElementById("cajaPuntos").textContent = functions.reporteA(miLista)
}

function b() {
    document.getElementById("cajaPuntos").textContent = functions.reporteB(miLista)
}

function c() {
    document.getElementById("cajaPuntos").textContent = functions.reporteC(miLista)
}

function d() {
    document.getElementById("cajaPuntos").textContent = functions.reporteD(miLista)
}

function e() {
    document.getElementById("cajaPuntos").textContent = functions.reporteE(miLista)
}

function f(){
    document.getElementById("cajaPuntos").textContent = functions.reporteF(miLista)
}

function g(){
    document.getElementById("cajaPuntos").textContent = functions.reporteG(miLista)
}

function h(){
    document.getElementById("cajaPuntos").textContent = functions.reporteH(miLista)
}