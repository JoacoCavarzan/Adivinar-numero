let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento("p", `Acertaste el número en ${intentos} veces ${(intentos === 1) ? 'vez' : 'veces'}`);
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", `El número secreto es menor`);
    } else {
      asignarTextoElemento("p", `El número secreto es mayor`);
    }
    intentos++;
  }

  return;
}

function generarNumeroSecreto(params) {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un múero del 1 al 10");
