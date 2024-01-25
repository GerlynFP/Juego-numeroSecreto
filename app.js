
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento() 
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el nuemero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El nuemero secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El nuemero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;    
}

function limpiarCaja () {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = ''; Se puede hacer en una misma linea de codigo
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}

condicionesIniciales();

