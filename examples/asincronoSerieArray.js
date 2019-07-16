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

function serie(arr, fn, callbackFinalizacion) {
  if (arr.length === 0) {
    callbackFinalizacion();
    return;
  }
  fn("texto" + arr.shift(), function() {
    serie(arr, fn, callbackFinalizacion);
  });
}

serie([1, 2, 3, 4, 5], esribeTras2Segundos, function() {
  console.log("termino");
});
