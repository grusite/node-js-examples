"use strict";

// Creamos una funció para usarla como constructor de objetos

function Fruta(nombre) {
  // this es el objeto que se está creando
  this.nombre = nombre;
}

const limon = new Fruta("limon");

console.log(limon);
