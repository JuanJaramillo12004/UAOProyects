/*
*  Archivo index.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 14-Febrero-2023
*
*  Descripción: 
*  Proporciona la lógica del servidor web creado en NodeJS, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

// OPCIONAL - importa funciones que son exportadas en el archivo utils.js
const misFunciones = require('./scripts/utils')


// importa a express y cors
const express = require('express')


// crea aplicación usando express y puerto
const app = express()
const port = 3000

// OPCIONAL - arreglo para almacenar los datos tomados desde el cliente web 
let transactionArr = []

//#region 
// como la información se va a enviar urlencoded, es necesario incluir la propiedad
// extended y que su valor sea true, para parsear los datos URL-encoded con la libreria qs,
// que es activamente mantenida.
app.use(express.urlencoded({extended: true}))

//app.use(express.json())

//#endregion

// Routes - se debe ajustar las rutas y lógica corrrespondiente
app.get('/transactions', (req, res) => {
  console.log('en get/transactions');
  // retorna archivo fijo
  res.sendFile(__dirname+"/static/initial.html");
})

// notese que en este caso no se requiere enviar la extensión
app.get('/transactions/about', (req, res) => {
    console.log('en get/about');
    res.sendFile(__dirname+"/static/about.html");
  })
  
app.get('/transactions/style.css', (req, res) => {
    console.log('en get/transactions/style.css');
      // retorna archivo fijo
    res.sendFile(__dirname+"/static/style.css");
  })    
  
// 
app.post('/transactions', (req, res) => {
  console.log('en post/transactions');

  const transaction = req.body;
  console.log(transaction)

  if (transaction.accion =='Calcular'){
    const peso = transaction.peso;
    const estatura = transaction.estatura;
    // calcula el IMC
    const imc = misFunciones.obtenerIMC(peso,estatura);
    // Crea objeto JavaScript
    const newData = {peso, estatura, imc};
    // Adiciona el nuevo objeto JavaScript
    transactionArr.push(newData);
    // obtiene string con la pagina HTML a retornar
    const nPage = misFunciones.crearPaginaRespuesta(peso, estatura, imc);
    res.send(nPage);  
  }else{  // Se solicita mostrar el Historial
    // se convierte a JSON y envia al cliente  
    res.send(JSON.stringify(transactionArr));
    console.log(transactionArr);
  }
})

// indicación de los archivos que pueden accesarse publicamente
// de deben dar los nombres completos
app.use(express.static('public'))

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Estoy ejecutandome en http://localhost:'+port);
})