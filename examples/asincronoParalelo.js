"use strict";

console.log("empiezo");

//  Función que escribe un texto en la consola tras 2 segundos
function esribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

// Si usmos un for, while, etc. ejecutamos todas las iteraziones en paralelo
// porque cada vuelta no espera a la anterior

for (let n = 0; n < 5; n++) {
  esribeTras2Segundos("texto", function() {
    console.log("termino" + n);
  });
}
