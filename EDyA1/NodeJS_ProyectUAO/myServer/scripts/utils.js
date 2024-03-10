/*
*  Archivo utils.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 13-Julio-2022
*
*  Descripción: 
*  Proporciona funciones variadas para computo y generacíon de paginas dinámicas, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

function obtenerIMC(peso, estatura){
    return peso/(estatura*estatura);
}

function crearPaginaRespuesta(peso, estatura, imc){
    const nPage = '<!DOCTYPE html>'+
    '<head>'+
    '    <title>Ejemplo Backend</title>'+
    '    <link rel="stylesheet" href="./transactions/style.css">'+
    '</head>'+
    '<body>'+
    '    <main>'+ 
    '        <h1>Resultado Calculo de IMCs</h1>'+
    '        <form action="/transactions" enctype="application/x-www-form-urlencoded" method="post">'+
    '            <table>'+
    '                <caption>Calculadora Online</caption>'+
    '                <tbody>'+
    '                    <tr>'+
    '                        <td>Peso</td>'+
    '                        <td><input type="text" value="60.5" name="peso" required></td>'+
    '                    </tr>'+
    '                    <tr>'+
    '                        <td>Estatura</td>'+
    '                        <td> <input type="text" value="1.7" name="estatura" required></td>'+
    '                    </tr>'+                
    '                    <tr>'+
    '                        <td>Acción:</td>'+ 
    '                        <td>'+   
    '                            <input type="radio" value="Calcular" name="accion" checked>IMC'+
    '                            </label><input type="radio" value="Historial" name="accion">Historial'+          
    '                        </td>'+
    '                    </tr>'+      
    '                    <tr>'+
    '                        <td colspan="2"><input type="submit"  value="Enviar"></td>'+              
    '                    </tr>'+                                 
    '                </tbody>'+
    '            </table>'+                          
    '        </form><br>'+
    '        <textarea  rows="2" cols="32" readonly>Peso:'+peso+'  Altura:'+estatura+'  IMC:'+imc.toFixed(2)+'</textarea>'+  
    '        <hr>'+   
    '    </main>'+
    '    <footer>'+
    '        <p> <small>Fuente propia para el curso de Estructura de Datos 1 en la Universidad Autónoma de Occidente</small> </p>'+
    '    </footer>'+
    '</body>'+
    '</html>';
    return nPage;
}

// se indican las funciones a importar
module.exports = {obtenerIMC, crearPaginaRespuesta};



