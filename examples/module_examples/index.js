"use strict";

const calculator = require("./calculator");
const calculator2 = require("./calculator");
const calculator3 = require("./calculator");

calculator.loquesea = "algo";

console.log(calculator.suma(1, 6));
console.log(calculator.resta(1, 6));
console.log(calculator.multiplica(2, 6));

// Todos los require apuntan al mismo objeto
// por lo que si tocamos un objeto, el 3o tambien lo tendrá
console.log(calculator3.loquesea);
