
// indicar clases que se importan y sus archivos js correspondiente
import {Persona} from './Persona.js';
import {Pasatiempo} from './Pasatiempo.js';
import {Estudiante} from './Estudiante.js';
import {Empleado} from './Empleado.js';

// referencias a los botones y area de texto
const btnIngresar = document.getElementById("ingresar");
const btnConsultar = document.getElementById("consultar");
let salida = document.getElementById("salida");

let info = [];

// se asignan eventos a las referencias
btnIngresar.addEventListener('click',ingresarNvaPersona);
btnConsultar.addEventListener('click',desplegarReporte);


function ingresarNvaPersona(){
  // capturar cada componente
  let nombre = document.getElementById("elNombre").value;
  let edad = parseInt(document.getElementById("laEdad").value);
  let cedula = parseInt(document.getElementById("laCedula").value);

  // Obtenemos pasatiempos:
  let nombrePasatiempo = document.getElementById("nomPasatiempo").value;
  let frecPasatiempo = parseFloat(
    document.getElementById("frecPasatiempo").value
  );

  suPasatiempo = new Pasatiempo(nombrePasatiempo, frecPasatiempo);

  let laOpcion = document.getElementById("laOpcion").value;

  let obj;
  if (laOpcion === "elEstudiante") {
    let codigo = parseInt(document.getElementById("elCodigo").value);

    obj = new Estudiante(codigo, nombre, edad, cedula, suPasatiempo);
  } else {
    let salario = parseFloat(document.getElementById("elSalario").value);

    obj = new Empleado(salario, nombre, edad, cedula, suPasatiempo);
  }
  
  info.push(obj);
  salida.value = obj.toString();
  console.log(info)
}

function desplegarReporte(){  
    // invocar a listarPersonas o buscarPersona  
    let res;

    salida.value = res;
}

function listarPersonas(bd){    
    let res = 'las personas buscadas son:\n';

    // recorrer el arreglo y obtener lo solicitado

    
    return res;
}

function buscarPersona(bd, cedulaD) {
    let res = "\n La persona buscada es: \n";
  
    bd.forEach((obj) => {
      if (obj.cedula == cedulaD) {
        res += obj.toString();
      }
    });
  
    return res;
}
