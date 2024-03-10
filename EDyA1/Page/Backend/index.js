// OPCIONAL - importa funciones que son exportadas en el archivo functios.js
const misFunciones = require('../Frontend/Scripts/funciones')
const path = require('path');

// importa a express y cors
const express = require('express')

// crea aplicación usando express y puerto
const app = express()
const port = 3000

// OPCIONAL - arreglo para almacenar los datos tomados desde el cliente web 
let miLista = []

//#region 
// como la información se va a enviar urlencoded, es necesario incluir la propiedad
// extended y que su valor sea true, para parsear los datos URL-encoded con la libreria qs,
// que es activamente mantenida.
app.use(express.urlencoded({extended: true}))

// Routes - se debe ajustar las rutas y lógica corrrespondiente
app.get('/calculaCuota', (req, res) => {
    console.log('en get/calculaCuota')
    // retorna archivo fijo
    const filePath = path.join(__dirname, '..', 'Frontend', 'Pages', 'index.html');
    res.sendFile(filePath);
})

app.get('/calculaCuota/Styles/style.css', (req, res) => {
    console.log('en get/calculaCuota/Styles/style.css');
    // retorna archivo fijo
    const filePath = path.join(__dirname, '..', 'Frontend', 'Styles', 'style.css');
    res.sendFile(filePath);
})

app.post('/calculaCuota', (req, res) => {
    console.log('en post/calculaCuota')
  
    const calculaCuota = req.body;
    console.log(calculaCuota)

    if(calculaCuota.accion == "Evaluar"){
        //obteniendo los datos de los inputs en la pagina
        const nombre = calculaCuota.nombre
        const prestamo = calculaCuota.prestamo
        const meses = calculaCuota.meses
        const interes = calculaCuota.interes

        //calculando la cuota mensual
        const cuotaM = misFunciones.calcularCuotaMensual(prestamo, meses, interes/100)
        //Variable que almacena toda la info
        const newData = {nombre, prestamo, meses, cuotaM, interes}
        //Guardando la info en una lista
        miLista.shift(newData)

        const nPage = misFunciones.crearPaginaRespuesta(nombre, prestamo, meses, cuotaM, interes)
        res.send(nPage); 
    }else {
    // Se solicita mostrar el Historial
    // se convierte a JSON y envia al cliente  
    res.send(JSON.stringify(miLista));
    console.log(miLista);
    }

})

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
    console.log('Estoy ejecutandome en http://localhost:'+port);
})
