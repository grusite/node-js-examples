"use strict";

const mongoose = require("mongoose");

// definios un esquema
const agenteSchema = mongoose.Schema(
  {
    name: String,
    age: Number
    //   email: {
    //     type: String,
    //     index: true,
    //     unique: true,
    //     default: ""
    //   }
  }
  // , { collection: "agentes" } // para saltarse la pluralizacion
);

// creamos el modelo del agente
// ese nombre del modelo lo coge y lo pluraliza (lowercase + plural)y lo usa como colección
const Agente = mongoose.model("Agente", agenteSchema);

// lo exportamos
module.exports = Agente;
