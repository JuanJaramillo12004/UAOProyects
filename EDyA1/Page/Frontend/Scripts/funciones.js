function calcularCuotaMensual(pres, nM, inte) {
    return pres * ((Math.pow(1 + inte, nM) * inte) / (Math.pow(1 + inte, nM) - 1))
}

function crearPaginaRespuesta(nombre, prestamo, meses, cuotaM, interes){
    const nPage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calcular Cuota Mensual</title>
        <link rel="stylesheet" href="../calculaCuota/styles/style.css">
    </head>
    <body>
        <main>
            <form action="/calculaCuota" enctype="application/x-www-form-urlencoded" method="post">
                <section>
                    <div>
                        <h1 id="TituloP">Prestamo Feliz</h1>
                    </div>
                </section>
                <section>
                    <div>
                        <fieldset>
                            <legend>Datos para su prestamo</legend>
                            <label>Nombre </label>
                            <input type="text" id="nombre">
                            <label>Prestamo </label>
                            <input type="text" id="prestamo">
                            <label>Meses </label>
                            <input type="text" id="meses">
                            <label>Interes</label>
                            <input type="text" id="interes">
                            <label>Resultado</label>
                            <textarea cols="100" rows="10" readonly>${nombre} debe pagar ${cuotaM.toFixed(2)} cada mes por el préstamo de ${prestamo} a ${meses} meses con el interés del ${interes}%</textarea>
                            <input type="submit"  value="Evaluar"><br>
                        </fieldset>
                    </div>
                </section>
                <section>
                    <div>
                        <fieldset>
                            <legend>Informacion total guardada</legend>
                            <textarea id="cajaInfo" cols="30" rows="10" readonly>Info: </textarea>
                            <input type="submit"  value="Mostrar"><br>
                        </fieldset>
                    </div>
                </section>
                <section>
                    <div>
                        <fieldset>
                            <legend>Puntos</legend>
                            <textarea id="cajaPuntos" cols="30" rows="10" readonly>Info: </textarea>
                            <button id="botonA">Punto A</button>
                            <button id="botonB">Punto B</button>
                            <button id="botonC">Punto C</button>
                            <button id="botonD">Punto D</button>
                            <button id="botonE">Punto E</button>
                            <button id="botonF">Punto F</button>
                            <button id="botonG">Punto G</button>
                            <button id="botonH">Punto H</button>
                        </fieldset>
                    </div>
                </section>
            </form>
        </main>
    </body>
    </html>`
    return nPage
}

function añadirPrestamo(info){
    const nombre = document.getElementById("nombre").value
    const prestamo = parseFloat(document.getElementById("prestamo").value)
    const nMeses = parseInt(document.getElementById("meses").value)
    const interes = parseFloat(document.getElementById("interes").value)/100

    // Validación de entrada
    let mensaje = "No hay datos que mostrar"
    if (isNaN(prestamo) || isNaN(nMeses) || isNaN(interes)) {
        alert("Por favor, ingrese los valores requeridos");
    } else {
        const cMensual = calcularCuotaMensual(prestamo, nMeses, interes).toFixed(2)
        mensaje = `${nombre} debe pagar una cuota de $${cMensual} cada mes por el préstamo de ${prestamo} a ${nMeses} meses con el interés del ${interes}`
        info.shift({"nombre":nombre,"prestamo":prestamo,"nMeses":nMeses,"interes":interes,"cMensual":cMensual}) //Shift para añadir al inicio de la lista, push para el final
    }
    return mensaje
}

function reporteTotal(info){
    let mensaje = "Lista de prestamos:\n"
    info.forEach(x => 
        mensaje += `
        Nombre: ${x.nombre}
        Valor prestamo: ${x.prestamo}
        Meses de pago: ${x.nMeses}
        Interes de pago: ${x.interes * 100}
        Cuota mensual: ${x.cMensual}\n
        ----------------------------------------`)
    return mensaje
}

function reporteA(info){
    let sum = 0
    info.forEach( x => sum += parseFloat(x.cMensual))
    return sum.toFixed(2)
}

function reporteB(info){
    let mensaje = "Cuotas mensuales menores a 300 mil:\n"
    let objFiltrados = info.filter(x => x.cMensual <= 300000)

    if (objFiltrados.length > 0) {
        objFiltrados.forEach(x =>
            mensaje += `
            Nombre: ${x.nombre}
            Valor préstamo: ${x.prestamo}
            Meses de pago: ${x.nMeses}
            Interés de pago: ${x.interes}
            Cuota mensual: ${x.cMensual}\n
            ----------------------------------------`)
    } else {
        mensaje += "No hay préstamos con cuotas mensuales menores a 300 mil."
    }
    return mensaje
}

function reporteC(info){
    let mensaje = "Préstamos a menos de 1 año:\n"
    let objFiltrados = info.filter(x => x.nMeses <= 12)

    if (objFiltrados.length > 0) {
        objFiltrados.forEach(x =>
            mensaje += `
            Nombre: ${x.nombre}
            Valor préstamo: ${x.prestamo}
            Meses de pago: ${x.nMeses}
            Interés de pago: ${x.interes}
            Cuota mensual: ${x.cMensual}\n
            ----------------------------------------`)
    } else {
        mensaje += "No hay préstamos a menos de 1 año."
    }
    return mensaje
}

function reporteD(info){
    let mensaje = "Primer préstamo mayor a 5 millones:\n"
    let objFiltrados = info.find(x => x.prestamo >= 5000000)

    if (objFiltrados) {
            mensaje += `
            Nombre: ${objFiltrados.nombre}
            Valor préstamo: ${objFiltrados.prestamo}
            Meses de pago: ${objFiltrados.nMeses}
            Interés de pago: ${objFiltrados.interes}
            Cuota mensual: ${objFiltrados.cMensual}\n
            ----------------------------------------`
    } else {
        mensaje += "No hay préstamo mayores a 5 millones."
    }
    return mensaje
}

function reporteE(info){
    let mensaje = "Primer prestamo con menos del 2% de interes:\n"
    let objFiltrados = info.filter(x => x.interes <= 0.02)

    if (objFiltrados.length > 0) {
        objFiltrados.forEach(x =>
            mensaje += `
            Nombre: ${x.nombre}
            Valor prestamo: ${x.prestamo}
            Meses de pago: ${x.nMeses}
            Interes de pago: ${x.interes}
            Cuota mensual: ${x.cMensual}\n
            ----------------------------------------`)
    } else {
        mensaje += "No hay préstamos con menos del 2% de interés."
    }
    return mensaje    
}

function reporteF(info){
    let mensaje = "Aumento de 90 mil en la cuota mensual: "
    info.map(x => 
        mensaje += `
            Nombre: ${x.nombre}
            Valor prestamo: ${x.prestamo}
            Meses de pago: ${x.nMeses}
            Interes de pago: ${x.interes}
            Cuota mensual: ${parseFloat(x.cMensual) + 90000}\n
            ----------------------------------------`)
    return mensaje
}

function reporteG(info){
    let mensaje = "Reduccion de 90 mil en el prestamo: "
    info.map(x => 
        mensaje += `
            Nombre: ${x.nombre}
            Valor prestamo: ${parseFloat(x.prestamo) - 90000}
            Meses de pago: ${x.nMeses}
            Interes de pago: ${x.interes}
            Cuota mensual: ${x.cMensual}\n
            ----------------------------------------`)
    return mensaje
}

function reporteH(info){
    let mensaje = "Lista de cuotas mensuales:\n"
    info.forEach(x =>
        mensaje += `
        Cuota mensual ${i}: ${miLista[i].cMensual}\n
        ----------------------------------------`)
    return mensaje
}

module.exports = { añadirPrestamo, crearPaginaRespuesta, calcularCuotaMensual, reporteTotal, reporteA, reporteB, reporteC, reporteD, reporteE, reporteF, reporteG, reporteH }