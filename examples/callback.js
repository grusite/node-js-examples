"use strict";

console.log("empiezo");

//  Función que escribe un texto en la consola tras 2 segundos
function esribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

esribeTras2Segundos("texto1", sigue);

function sigue() {
  esribeTras2Segundos("texto2", function() {
    console.log("termino");
  });
}
