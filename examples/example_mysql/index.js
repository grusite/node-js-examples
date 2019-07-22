"use strict";

// Cargo driver mysql
const mysql = require("mysql");

// Creo conexión
const conexion = mysql.createConnection(
  "mysql://usuariocurso:us3r@didimo.es:3306/cursonode"
);

// Conecto
conexion.connect();

// Lanzo consulta
conexion.query("SELECT * from agentes", (err, rows, field) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(rows);
});
