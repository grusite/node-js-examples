"use strict";

// cargar libreria de mongoose
const debug = require("debug")("nodepop:db");
const mongoose = require("mongoose");
const conn = mongoose.connection;

// gestionar eventos de conexion
conn.on("eror", err => {
  console.log("Error de conexion ", err);
  process.exit(1);
});

conn.once("open", () => {
  console.log("Conectado a MongoDB en ", mongoose.connection.name);
});

// conectar
mongoose.connect("mongodb://localhost/cursonode", { useNewUrlParser: true });

// exportar conexion (opcional)
module.exports = conn;
