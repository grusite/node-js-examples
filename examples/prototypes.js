"use strict";

// Creamos una función constructora de objetos
function Persona(name) {
  this.name = name;
}

Persona.prototype.saluda = function() {
  console.log("Hola, me llamo, " + this.name);
};

const luis = new Persona("Luis");
const pepe = new Persona("Pepe");
const jose = new Persona("Jose");

luis.saluda();
pepe.saluda();
jose.saluda();

// Herencia de personas --------------------

// Constructor de Agente
function Agente(name) {
  // Heredo el constructor de personas
  Persona.call(this, name);
}

// Heredamos sus propiedades y metodos
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente("Smith");

console.log(
  smith instanceof Agente,
  smith instanceof Persona,
  smith instanceof Object
);

smith.saluda();

// Herencia múltiple

// Creamos Mixin de superheroes
function Superheroe() {
  this.vuela = function() {
    console.log(this.name, "vuela");
  };

  this.esquvaBalas = function() {
    console.log(this.name, "esquiva balas");
  };
}

// Ahora copio todos estas propiedades y métodos de Superheroe al prototipo del Agente
// Así, el Agente tendrá el prototipo (props y metodos) tanto de personas como de Superheroe

Object.assign(Agente.prototype, new Superheroe());

smith.esquvaBalas();
smith.vuela();
