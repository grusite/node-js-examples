"use strict";

console.log("empiezo");

//  Función que escribe un texto en la consola tras 2 segundos
function esribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

// Ahora vamos a escribir un bucle asíncrono en serie,
// llamando a una func n veces y llamando al callbackFinalizacion

function serie(n, fn, callbackFinalizacion) {
  if (n === 0) {
    callbackFinalizacion();
    return;
  }
  n = n - 1;
  fn("texto" + n, function() {
    serie(n, fn, callbackFinalizacion);
  });
}

serie(5, esribeTras2Segundos, function() {
  console.log("termino");
});
