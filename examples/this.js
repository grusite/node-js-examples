"use strict";

function Coche(ruedas) {
  this.ruedas = ruedas;
  this.cuantasRuedas = function() {
    console.log("Tiene " + this.ruedas + " ruedas");
  };
}

const todoterreno = new Coche(4);

// Donde estén los () todo lo que hay a la izda es el this
todoterreno.cuantasRuedas();

// Aquí lo perdería porque no le pongo los parentesis
const otraVariable = todoterreno.cuantasRuedas.bind(todoterreno);

console.log(otraVariable);

otraVariable();

// Usar metodos como callback sin perder el this
setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);

console.log(todoterreno);
