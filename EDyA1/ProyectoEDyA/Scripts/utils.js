let input = document.getElementById("inputString");
let btnReporte = document.getElementById("reporte");
let tArea = document.getElementById("respuesta");
document.getElementById("ingresar").addEventListener("click", function(){calcularScoreBoard(input.value);});

function calcularScoreBoard(caso){
    tArea.value = "";
    caso.split(";").forEach((elemento) => {
        let resultado = elemento.split(" ");
        tArea.value += `${resultado[0]} ${resultado[1]} ${resultado[2]} ${resultado[3]}\n`;
    });
    console.log(res);
}