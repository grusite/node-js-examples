"use strict";

// cargar libreria de mongoose
const debug = require("debug")("nodeapi:db");
const mongoose = require("mongoose");
const conn = mongoose.connection;

// gestionar eventos de conexion
conn.on("eror", err => {
  debug("Error de conexion ", err);
  //   console.log("Error de conexion ", err);
  process.exit(1);
});

conn.once("open", () => {
  debug("Conectado a MongoDB en", mongoose.connection.name);
  //   console.log("Conectado a MongoDB en ", mongoose.connection.name);
});

// conectar
mongoose.connect("mongodb://localhost/cursonode", { useNewUrlParser: true });

// exportar conexion (opcional)
module.exports = conn;
