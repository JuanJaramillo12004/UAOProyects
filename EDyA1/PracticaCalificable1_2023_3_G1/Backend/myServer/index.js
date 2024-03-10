const misFunciones = require('./scripts/utils')
const path = require('path');

// importa a express y cors
const express = require('express')
const cors = require('cors')


// crea aplicación usando express y puerto
const app = express()
const port = 1234

//#region 
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(
  express.json({
    type: "*/*"
  })
)

app.use(cors());
//#endregion

// Routes
// Ajustar ruta

app.get('/practicaCalificable1', (req, res) => {
  console.log('en get/practicaCalificable1');
  // retorna archivo fijo
  const filePath = path.join(__dirname, '..', '..', 'FrontEnd', 'index.html');
  res.sendFile(filePath);
})

app.get('/practicaCalificable1/styles/default.css', (req, res) => {
  console.log('en get/practicaCalificable1/styles/default.css');
  // retorna archivo fijo
  const filePath = path.join(__dirname, '..', '..', 'FrontEnd', 'styles', 'default.css');
  res.sendFile(filePath);
})

//app.get('/practicaCalificable1', (req, res) => {
  // obtener pagina web con el valor pagado por IVA para un valor total pagado de 2000 y regresarla al usuario (con el método send)
 // const paginaWeb = misFunciones.obtenerPaginaIVA(4000000);
 // res.send(paginaWeb);
//})
 
// Ajustar ruta
app.post('/practicaCalificable1', (req, res) => {
  const {elValor} = req.body;
  const valorTotal = parseInt(elValor);
  const paginaWeb = misFunciones.obtenerPaginaIVA(valorTotal);

  res.send(paginaWeb);
  // asignar en la variable valorTotal, la cantidad suministrada desde el formulario del cliente web, 
  // obtener pagina web con el valor pagado por IVA para la cantidad asignada en valorTotal y regresarla al usuario (con el método send)
})

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Servidor en ejecución');
})

