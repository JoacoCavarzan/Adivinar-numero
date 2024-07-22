let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento("p", `Acertaste el número en ${intentos} veces ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    //El ususario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", `El número secreto es menor`);
    } else {
      asignarTextoElemento("p", `El número secreto es mayor`);
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsario').value = '';
}

function generarNumeroSecreto(params) {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", "Indica un múero del 1 al 10");
    // generar num aleatorio
    numeroSecreto = generarNumeroSecreto();
    // inicializar num de intentos
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // indicar msj de intervalo de numero
    condicionesIniciales();
    // generar num aleatorio
    // deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // inicializar num de intentos
    
}

condicionesIniciales();


