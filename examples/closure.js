"use strict";

function create(numero) {
  return {
    porDos: function() {
      const resul = numero * 2;
      console.log(resul);
      return resul;
    }
  };
}

const calculadorCuatro = create(4);
const calculadorSeis = create(6);

// console.log(calculadorCuatro.porDos());
// console.log(calculadorSeis.porDos());

// Los metodos creados con closures no pierden nunca el acceso al objeto propietario
// No tienen this de hecho
setTimeout(calculadorCuatro.porDos, 2000);

// Otro ejemplo
// const otroObjeto = {
//   porDos: calculadorCuatro.porDos
// };

// otroObjeto.porDos();
