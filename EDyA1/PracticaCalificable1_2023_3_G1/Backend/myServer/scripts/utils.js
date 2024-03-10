/*
*  Archivo utils.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 1-Agosto-2023
*
*  Descripción: 
*  Proporciona funciones variadas para computo y generacíon de paginas dinámicas, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

function obtenerPaginaIVA(valor){
	// Calcular el valor correspondiente al IVA, truncarlo y asignarlo a la variable respuesta
	const iva = valorTotal* 0.19;
	const respuesta = Math.trunc(iva)

	
	const nPage = '<!DOCTYPE html>'+
		'<head>'+
		'    <title>Practica Calificable Corte1 - Grupo 1</title>'+
		'</head>'+
		'<body>'+
		'    <main>'+ 
		'        <h1>Computo del Valor Pagado por IVA</h1>'+
		'        <form action="/practicaCalificable1" enctype="application/x-www-form-urlencoded" method="post">'+
		'            Valor Total Pagado $ '+
		'            <input type="text" value="'+valor+'" name="elValor">'+
		'			<input type="submit"  value="Calcular">'+
		'        </form><br>'+
		'		<textarea cols="35" rows="2">El IVA pagado fue de $ '+respuesta+'</textarea><br>'+
		'        <hr>'+   
		'    </main>'+
		'    <footer>'+
		'        <p> <small>Fuente propia para el curso de Estructura de Datos 1 en la Universidad Autónoma de Occidente</small> </p>'+
		'    </footer>'+
		'</body>'
    return nPage;	
}

// se indican las funciones a importar
module.exports = {obtenerPaginaIVA};



