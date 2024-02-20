function obtenerIMC(pes, est){
    return pes/(est*est);
}

function calcularCicloVida(años){
    let res = 'Adulto';

    if (años < 18){
        res = 'Adolescente';
    }else {
        if (años < 26){
            res = 'Joven';
        }
    }

    return res;
}

export {obtenerIMC, calcularCicloVida};