"use strict";

// const fsPromise = require("fs").promises;
// funcion que retorna una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    // aquí irá el código que hará resolverse o rechazarse la promesa
    setTimeout(() => {
      resolve("algo");
      //   reject(new Error("Fataaaal!"));
    }, ms);
  });
}

// Obtener la promesa
const promesa = sleep(2000);
console.log(promesa);

// Consumimos la promesa
promesa
  .then(algo => {
    console.log("Se ha ejecutado OK la promesa", algo);
    // .then devuelve una promesa pero si nosotros retornamos algo, esa promesa se resuelve con ese algo
    return algo;
  })
  // .then devuelve una promesa, que podemos consumir con otro then() solo si ha terminada OK
  .then(algo => {
    return sleep(2000).then(() => {
      console.log("Se ha ejecutado OK la promesa", algo);
      // throw new Error("chungo");
      return algo;
    });
  })
  .then(algo => {
    return sleep(2000).then(() => {
      console.log("Se ha ejecutado OK la promesa", algo);
      return algo;
    });
  })
  .then(algo => {
    return sleep(2000).then(() => {
      console.log("Se ha ejecutado OK la promesa", algo);
      return algo;
    });
  })
  // Al hacerlo de esta manera, con solo un catch controlamos los errores de todos los then
  // Ya que en cuanto un then retorna un error, va al catch del mismo nivel
  .catch(err => {
    console.log("promesa rechazada", err);
  });

// Me suscribo a una promesa ya completada
setTimeout(() => {
  promesa.then(() => {
    console.log("promesa inicial ya completada");
  });
}, 10000);
