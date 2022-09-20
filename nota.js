let form = document.getElementById('form');

function calcular(e){
    let contenido = document.getElementById('contenido');
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    let nota4 = parseInt(document.getElementById('nota4').value);

    let val1 = validar(nota1,1);
    let val2 = validar(nota2,2);
    let val3 = validar(nota3,3);
    let val4 = validar(nota4,4);

    if(val1 && val2 && val3 && val4){
        let promedio = promedioNotas(nota1,nota2,nota3,nota4);
        let notaMin = Math.max(nota1,nota2,nota3,nota4);
        let notaMax = Math.min(nota1,nota2,nota3,nota4);
        let situacionActual = obtenerSituacion(promedio);

        contenido.innerHTML= `
            El promedio es : ${promedio} <br>
            La nota minima es : ${notaMin} <br>
            La nota maxima es : ${notaMax} <br>
            La situacion actual es : ${situacionActual} <br>
        `
    }
    e.preventDefault(); // Para evitar que la pagina se reinicie
}

form.addEventListener('submit', calcular);


function validar(nota,contador){
    if(nota<0){
        alerta('La nota '+contador+' es menor a 0')
        return false;
    } else if (nota>20){
        alerta('La nota '+contador+' es mayor a 20')
        return false;
    } else{
        return  true;
    }
}

function alerta(texto){
    Swal.fire({
        heightAuto: false,
        icon: 'error',
        title: 'ERROR',
        text: texto,
    })
}

function promedioNotas(nota1,nota2,nota3,nota4) {
    let promedio = (nota1+nota2+nota3+nota4)/4;
    return promedio;
}

function obtenerSituacion(promedio){
    if(promedio>0 && promedio<10){
        return "DESAPROBADO";
    } else if(promedio>11 && promedio<13){
        return "RECUPERA";
    } else if(promedio>14 && promedio<20){
        return "APROBADO";
    }
}
