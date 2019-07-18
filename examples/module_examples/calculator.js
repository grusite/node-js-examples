"use strict";

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

module.exports.multiplica = function(a, b) {
  return a * b;
};

module.exports.suma = suma;
exports.resta = resta;
